import { Router } from "express";
import { fetchAllCountries } from "../services/restCountries";
import { normalizeCountry } from "../utils/normalize";
import type { CountriesResponse, CountryDTO } from "../types/country";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const raw = await fetchAllCountries();
        const normalized: CountryDTO[] = raw.map(normalizeCountry);

        const response: CountriesResponse = {
            items: normalized,
            total: normalized.length,
        };

        return res.json(response);
    } catch (err) {
        const message =
            err instanceof Error ? err.message : "Upstream service failed";

        return res.status(502).json({
            error: "Failed to fetch countries",
            message,
        });
    }
});

export default router;
