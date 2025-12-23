import { httpClient } from "../api/httpClient";
import type { RestCountry } from "../utils/normalize";

const ENDPOINT =
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca3";

export async function fetchAllCountries(): Promise<RestCountry[]> {
    const response = await httpClient.get<RestCountry[]>(ENDPOINT);

    if (!Array.isArray(response.data)) {
        throw new Error("Invalid upstream response");
    }

    return response.data;
}
