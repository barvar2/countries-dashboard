import type { CountriesResponse, SortKey } from "../types/countries";
import { httpClient } from "./httpClient";

export async function getCountries(params: {
    signal?: AbortSignal;
    search?: string;
    sort?: SortKey;
}): Promise<CountriesResponse> {
    const response = await httpClient.get<CountriesResponse>("/countries", {
        params: {
            search: params.search,
            sort: params.sort,
        },
        signal: params.signal,
    });

    return response.data;
}
