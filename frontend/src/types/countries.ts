export type Country = {
    id: string;
    name: string;
    capital: string;
    population: number;
    flagUrl?: string;
    flagAlt: string;
};

export type SortKey = "name-asc" | "name-desc" | "pop-asc" | "pop-desc";

export type CountriesResponse = {
    items: Country[];
    total: number;
};
