import type { CountryDTO } from "../types/country";

export type RestCountry = {
    name?: { common?: string };
    capital?: string[];
    population?: number;
    flags?: { png?: string; alt?: string };
    cca3?: string;
};

export function normalizeCountry(item: RestCountry): CountryDTO {
    const name = item?.name?.common?.trim() || "Unknown";
    const capital = item?.capital?.length ? item.capital.join(", ") : "—";
    const population = typeof item.population === "number" ? item.population : 0;

    return {
        id: item.cca3 || `${name}-${population}`,
        name,
        capital,
        population,
        flagUrl: item.flags?.png,
        flagAlt: item.flags?.alt || `Flag of ${name}`,
    };
}
