export interface QueryResponse {
    current_page: number,
    limit: number,
    next_page: number,
    previous_page: number,
    results: Array<Results>,
    search_term: string,
    status: number,
    total_jokes: number,
    total_pages: number
};

export interface Results {
    id: string,
    joke: string,
    status?: number,
}