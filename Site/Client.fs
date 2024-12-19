namespace Site

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Templating

[<JavaScript>]
module Templates =   
    type MainTemplate = Templating.Template<"Main.html", ClientLoad.FromDocument, ServerLoad.PerRequest>

[<JavaScript>]
module Client =
    open WebSharper.UI.Client

    let trimFloatString (floatS: string) = floatS.Substring(0, min floatS.Length 5)

    type SelectedPlayer = 
        {
            Name: string
            Value: int
            Team: string
            Id: int
            Avg: float
        }

        static member Create name value team id avg =
            { Name = name; Value = value; Team = team; Id = id; Avg = avg }

        member this.ToDoc(v: Var<SelectedPlayer list>) =
            Templates.MainTemplate.PlayerData()
                .Name(this.Name)
                .Value(string this.Value)
                .Team(this.Team)
                .AVG(string this.Avg |> trimFloatString)
                .RemovePlayer(fun _ -> v.Update (fun players -> List.filter (fun x -> x.Id <> this.Id) players))
                .Doc()

    let gks : Var<SelectedPlayer list> = Var.Create []
    let defs : Var<SelectedPlayer list> = Var.Create []
    let mids : Var<SelectedPlayer list> = Var.Create []
    let atts : Var<SelectedPlayer list> = Var.Create []

    // Max number of players
    let MAX_GK = 2
    let MAX_DEF = 5
    let MAX_MID = 5
    let MAX_ATT = 3

    let MAX_VALUE = 1000

    let configuration =
        [
            1, (gks, MAX_GK)
            2, (defs, MAX_DEF)
            3, (mids, MAX_MID)
            4, (atts, MAX_ATT)
        ]
        |> Map.ofList
    

    // Cannot exceed 1000
    let currentTotalValue =
        View.Do {
            let! gks = gks.View
            let! defs = defs.View
            let! mids = mids.View
            let! atts = atts.View
            return (List.sumBy (fun x -> x.Value) (List.concat [gks;defs;mids;atts]))
        }

    // We can only have 3 players at maximum from each team
    let currentTeamAllocation =
        View.Do {
            let! gks = gks.View
            let! defs = defs.View
            let! mids = mids.View
            let! atts = atts.View
            return (List.groupBy (fun x -> x.Team) (List.concat [gks;defs;mids;atts]) |> List.choose (fun (t, items) -> if items.Length = 3 then Some t else None))
        }

    let selectedAverage =
        View.Do {
            let! gks = gks.View
            let! defs = defs.View
            let! mids = mids.View
            let! atts = atts.View
            return List.concat [gks;defs;mids;atts] |> function [] -> 0.0 | l -> List.averageBy (fun x -> x.Avg) l
        }

    type DT =
        [<Inline "$this.on('click', $sel, $callback)">]
        member this.onClick (sel: string) (callback : Dom.Event -> unit) = X<unit>

    [<Inline "new $global.DataTable($x)">]
    let initializeTable (x: string) = X<DT>

    let getTypeString (i: int) =
        match i with
        | 1 -> "goalkeepers"
        | 2 -> "defenders"
        | 3 -> "midfielders"
        | 4 -> "attackers"
        | _ -> "N/A"

    let onclickAddPlayer (el: Dom.Element) =
        async {
            let tr = el.ParentElement.ParentElement
            let elementType = tr.GetAttribute("data-playertype") |> int
            let (var, max) = configuration.[elementType]
            let! playersInRole = View.GetAsync var.View
            if playersInRole.Length < max then
                let playerName = tr.GetAttribute("data-playername")
                let playerValue = tr.GetAttribute("data-playervalue") |> int
                let playerTeam = tr.GetAttribute("data-playerteam")
                let playerId = tr.GetAttribute("data-playerid") |> int
                let playerAvg = tr.GetAttribute("data-playeravg") |> float
                let! cta = View.GetAsync currentTeamAllocation
                let! totalValue = View.GetAsync currentTotalValue
                if playersInRole |> List.exists (fun p -> playerId = p.Id) then
                    "This player is already part of your team"
                    |> JS.Alert
                elif cta |> List.contains playerTeam then
                    sprintf "You already have the maximum number of players selected from %s" playerTeam
                    |> JS.Alert
                elif totalValue + playerValue > MAX_VALUE then
                    "The selected player would put you above the budget limit"
                    |> JS.Alert
                else    
                    var.Update (fun players -> List.append players [SelectedPlayer.Create playerName playerValue playerTeam playerId playerAvg])
            else
                getTypeString elementType
                |> sprintf "You already have the maximum number of %s selected"
                |> JS.Alert
        }

    let SelectedPlayer (v: Var<SelectedPlayer list>) =
        v.View
        |> Doc.BindView(fun players ->
            match players with
            | [] -> text "None selected"
            | players -> players |> List.map(fun x -> x.ToDoc(v)) |> Doc.Concat
        )

    let SelectedGKs () = SelectedPlayer gks
    let SelectedDefs () = SelectedPlayer defs
    let SelectedMids () = SelectedPlayer mids
    let SelectedAtts () = SelectedPlayer atts

    let CurrentAverage () = selectedAverage |> Doc.BindView (string >> text)
    let CurrentTotalValue () = currentTotalValue |> Doc.BindView (string >> text)

    let Main () =
        let dtgk = initializeTable "#gk"
        let dtdef = initializeTable "#def"
        let dtmid = initializeTable "#mid"
        let dtatt = initializeTable "#att"

        let tabs = JS.Document.GetElementsByClassName("tab")
        let tabBodies = JS.Document.GetElementsByClassName("tab-body")

        for i in [0..tabs.Length - 1] do
            let element = tabs.Item i |> As<Dom.Element>
            element.AddEventListener("click", (fun (ev: Dom.Event) ->
                for i in [0..tabBodies.Length-1] do
                    let body = tabBodies.Item i |> As<Dom.Element>
                    body.ClassList.Add("hidden")
                let idToShow = element.Id.Replace("tab", "body")
                (JS.Document.GetElementById idToShow).ClassList.Remove("hidden")
                let currentActive = JS.Document.QuerySelector(".tab.active")
                if currentActive <> null then currentActive.ClassList.Remove("active")
                element.ClassList.Add("active")
            ))

        JS.Document.GetElementById("gk-tab")?click()

        dtgk.onClick ".playerAdder" (fun ev -> onclickAddPlayer (ev.Target |> As<Dom.Element>) |> Async.Start)
        dtdef.onClick ".playerAdder" (fun ev -> onclickAddPlayer (ev.Target |> As<Dom.Element>) |> Async.Start)
        dtmid.onClick ".playerAdder" (fun ev -> onclickAddPlayer (ev.Target |> As<Dom.Element>) |> Async.Start)
        dtatt.onClick ".playerAdder" (fun ev -> onclickAddPlayer (ev.Target |> As<Dom.Element>) |> Async.Start)
        