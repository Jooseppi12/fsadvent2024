namespace Site

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home

module Templating =
    open WebSharper.UI.Html
    open type WebSharper.UI.ClientServer


    let GK = 1
    let DEF = 2
    let MID = 3
    let ATT = 4

    type BaseData =
        {
            elements: Element []
            teams: Team []
        }

    and Team =
        {
            id: int
            short_name: string
        }

    and Element =
        {
            id: int
            web_name: string
            element_type: int
            now_cost: int
            team: int
        }

    type Player =
        {
            history: History []
        }

    and History =
        {
            total_points: float
        }

    type PlayerData =
        {
            id: int
            name: string
            value: int
            team: string
            points: float
            avg: float
            avg5: float
            avg10: float
            var: float
            element_type: int
        }

        member this.ToDoc() =
            Templates.MainTemplate.Players()
                .AVG(string this.avg |> Client.trimFloatString)
                .AVG5(string this.avg5 |> Client.trimFloatString)
                .AVG10(string this.avg10 |> Client.trimFloatString)
                .VAR(string this.var |> Client.trimFloatString)
                .PTS(string this.points)
                .Team(this.team)
                .Value(string this.value)
                .Name(this.name)
                .Type(string this.element_type)
                .ID(string this.id)
                .Doc()

    let Main ctx = async {
        let baseData =
            System.IO.File.ReadAllText(__SOURCE_DIRECTORY__ + "/../data/baseData.json")
            |> System.Text.Json.JsonSerializer.Deserialize<BaseData>

        let players =
            [
                for element in baseData.elements do
                    let playerData =
                        System.IO.File.ReadAllText(__SOURCE_DIRECTORY__ + sprintf "/../data/player/%d.json" element.id)
                        |> System.Text.Json.JsonSerializer.Deserialize<Player>
                    let totalGames = playerData.history.Length
                    let avg = playerData.history |> Array.averageBy (fun h -> float h.total_points)
                    let variance = playerData.history |> Array.averageBy (fun h -> (float h.total_points - avg) ** 2) |> sqrt
                    {
                        id = element.id
                        name = element.web_name
                        value = element.now_cost
                        team = baseData.teams |> Array.find (fun t -> t.id = element.team) |> fun t -> t.short_name
                        points = playerData.history |> Array.sumBy (fun h -> h.total_points)
                        avg = avg
                        avg5 = playerData.history[totalGames-5..] |> Array.averageBy (fun h -> float h.total_points)
                        avg10 = playerData.history[totalGames-10..] |> Array.averageBy (fun h -> float h.total_points)
                        var = variance
                        element_type = element.element_type
                    }
            ]

        let goalkeepers = players |> List.filter (fun x -> x.element_type = GK)
        let defenders = players |> List.filter (fun x -> x.element_type = DEF)
        let midfielders = players |> List.filter (fun x -> x.element_type = MID)
        let attackers = players |> List.filter (fun x -> x.element_type = ATT)

        return!
            Content.Page(
                Templates.MainTemplate()
                    .CurrentAverage(client <@ Client.CurrentAverage () @>)
                    .CurrentTotalValue(client <@ Client.CurrentTotalValue () @>)
                    .Body(
                        Templates.MainTemplate.MainForm()
                            .ClientInit(fun (el: JavaScript.Dom.Element) -> Client.Main())
                            .Goalkeepers(client <@Client.SelectedGKs()@>)
                            .Attackers(client <@Client.SelectedAtts()@>)
                            .Midfielders(client <@Client.SelectedMids()@>)
                            .Defenders(client <@Client.SelectedDefs()@>)
                            .GKPlayers(
                                goalkeepers
                                |> List.map (fun gk ->
                                    gk.ToDoc()
                                )
                            )
                            .DefPlayers(
                                defenders
                                |> List.map (fun def ->
                                    def.ToDoc()
                                )
                            )
                            .MidPlayers(
                                midfielders
                                |> List.map (fun mid ->
                                    mid.ToDoc()
                                )
                            )
                            .AttPlayers(
                                attackers
                                |> List.map (fun att->
                                    att.ToDoc()
                                )
                            )
                            .Doc()
                    )
                    .Doc()
            )
    }


module Site =
    let HomePage ctx =
        Templating.Main ctx

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage ctx
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = Site.Main
        member this.Actions = [Home]

[<assembly: Website(typeof<Website>)>]
do ()
