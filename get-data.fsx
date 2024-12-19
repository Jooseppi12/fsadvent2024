open System.IO
open System.Net.Http
open System.Text.Json

let dataFolder = "data"

// obtain high level summary data of teams + players
let baseDataUrl = "https://fantasy.premierleague.com/api/bootstrap-static/"
let playerSpecificData (i: int) = sprintf "https://fantasy.premierleague.com/api/element-summary/%d/" i

type BaseData =
    {
        elements: Element []
    }

and Element =
    {
        id: int
    }

let httpClient = new HttpClient()

let dataDirectory = DirectoryInfo("data")
if not dataDirectory.Exists then
    dataDirectory.Create()

let playerDirectory = DirectoryInfo("data/player")
if not playerDirectory.Exists then
    playerDirectory.Create()

async {
    let! baseData = httpClient.GetAsync(baseDataUrl) |> Async.AwaitTask
    let baseDataStream = baseData.Content.ReadAsStream()
    let! baseDataDeserialized = JsonSerializer.DeserializeAsync<BaseData>(baseDataStream).AsTask() |> Async.AwaitTask
    use fs = new FileStream(dataFolder + "/baseData.json", FileMode.OpenOrCreate)
    baseDataStream.Seek(0, SeekOrigin.Begin) |> ignore
    do! baseDataStream.CopyToAsync(fs) |> Async.AwaitTask
    do! fs.FlushAsync() |> Async.AwaitTask
    for element in baseDataDeserialized.elements do
        let! playerData = httpClient.GetAsync(playerSpecificData element.id) |> Async.AwaitTask
        let playerDataStream = playerData.Content.ReadAsStream()
        use pfs = new FileStream(dataFolder + sprintf "/player/%d.json" element.id, FileMode.OpenOrCreate)
        do! playerDataStream.CopyToAsync(pfs) |> Async.AwaitTask
        do! pfs.FlushAsync() |> Async.AwaitTask
        do! Async.Sleep 1000
}
|> Async.RunSynchronously