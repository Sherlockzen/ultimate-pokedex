export interface pokeList {
    count: number,
    next: string | null,
    previous: string | null,
    results: results[],
}

interface results {
    name: string,
    url: string,
}