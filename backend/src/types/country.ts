export type CountryDTO = {
    id: string;
    name: string;
    capital: string;
    population: number;
    flagUrl?: string;
    flagAlt: string;
};

export type CountriesResponse = {
    items: CountryDTO[];
    total: number;
};
