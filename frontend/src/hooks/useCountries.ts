import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getCountries } from "../api/countriesApi";
import type { Country } from "../types/countries";

type UseCountriesState = {
    countries: Country[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
};

type ApiErrorResponse = {
    error?: string;
    message?: string;
};

function toUserFriendlyError(err: unknown): string {
    if (axios.isAxiosError<ApiErrorResponse>(err)) {
        const status = err.response?.status;
        const data = err.response?.data;

        const message =
            data?.message ??
            data?.error ??
            err.message ??
            "Network error. Please try again.";

        return status ? `Request failed (${status}): ${message}` : message;
    }

    if (err instanceof Error) {
        return err.message;
    }

    return "Failed to fetch countries.";
}

export function useCountries(): UseCountriesState {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [reloadKey, setReloadKey] = useState<number>(0);

    const refetch = useCallback(() => {
        setReloadKey((k) => k + 1);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        let isCancelled = false;

        const load = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const data = await getCountries({
                    signal: controller.signal,
                });

                if (!isCancelled) {
                    setCountries(data.items);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(toUserFriendlyError(err));
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        void load();

        return () => {
            isCancelled = true;
            controller.abort();
        };
    }, [reloadKey]);

    return { countries, loading, error, refetch };
}
