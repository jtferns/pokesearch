export namespace PKMN {
  export type SearchResults = {
    count: number
    results: SearchResult[]
  }
  export type SearchResult = {
    name: string
    url: string
  }
}
