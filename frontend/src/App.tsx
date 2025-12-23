import {useCallback, useEffect, useMemo, useState} from "react";
import {useCountries} from "./hooks/useCountries";
import {useDebouncedValue} from "./hooks/useDebouncedValue";
import {Controls} from "./components/controls/Controls.tsx";
import {CountryCard} from "./components/country-card/CountryCard.tsx";
import {CountryCardSkeleton} from "./components/country-card-skeleton/CountryCardSkeleton.tsx";
import type {Country, SortKey} from "./types/countries";
import {UI_TEXT} from "./constants/uiText";

import {
    Badge,
    ErrorBox,
    Grid,
    H1,
    Header,
    HintText,
    Message,
    MetaRow,
    Page,
    RetryButton,
    StickyHeader,
    StickyInner,
    StickyPanel,
} from "./App.styles";

function sortCountries(list: Country[], sort: SortKey): Country[] {
    const copy = [...list];
    copy.sort((a, b) => {
        switch (sort) {
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "pop-asc":
                return a.population - b.population;
            case "pop-desc":
                return b.population - a.population;
            default:
                return 0;
        }
    });
    return copy;
}

export default function App() {
    const {countries, loading, error, refetch} = useCountries();

    const [searchInput, setSearchInput] = useState<string>("");
    const [sort, setSort] = useState<SortKey>("name-asc");
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, {passive: true});
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const debouncedSearch = useDebouncedValue(searchInput, 250);

    const onSearchChange = useCallback((value: string) => {
        setSearchInput(value);
    }, []);

    const onSortChange = useCallback((value: SortKey) => {
        setSort(value);
    }, []);

    const normalizedQuery = useMemo(
        () => debouncedSearch.trim().toLowerCase(),
        [debouncedSearch]
    );

    const filtered = useMemo(() => {
        if (!normalizedQuery) return countries;
        return countries.filter((c) =>
            c.name.toLowerCase().includes(normalizedQuery)
        );
    }, [countries, normalizedQuery]);

    const filteredAndSorted = useMemo(
        () => sortCountries(filtered, sort),
        [filtered, sort]
    );

    const skeletonCount = 12;

    return (
        <>
            <StickyHeader $scrolled={isScrolled}>
                <StickyInner>
                    <Header>
                        <H1>{UI_TEXT.TITLE}</H1>
                    </Header>

                    <StickyPanel>
                        <Controls
                            search={searchInput}
                            sort={sort}
                            onSearchChange={onSearchChange}
                            onSortChange={onSortChange}
                        />

                        <MetaRow>
                            <Badge>
                                {UI_TEXT.META.TOTAL}: {countries.length}
                            </Badge>
                            <Badge>
                                {UI_TEXT.META.SHOWING}:{" "}
                                {loading
                                    ? UI_TEXT.META.LOADING_PLACEHOLDER
                                    : filteredAndSorted.length}
                            </Badge>
                        </MetaRow>
                    </StickyPanel>
                </StickyInner>
            </StickyHeader>

            <Page>
                {error ? (
                    <ErrorBox role="alert">
                        <b>{UI_TEXT.ERROR.LABEL}</b>
                        <HintText>{UI_TEXT.ERROR.HINT}.</HintText>
                        <RetryButton type="button" onClick={refetch}>
                            {UI_TEXT.ERROR.RETRY}
                        </RetryButton>
                    </ErrorBox>
                ) : (
                    <Grid aria-busy={loading}>
                        {loading
                            ? Array.from({length: skeletonCount}).map((_, i) => (
                                <CountryCardSkeleton key={`s-${i}`}/>
                            ))
                            : filteredAndSorted.map((c) => (
                                <CountryCard key={c.id} country={c}/>
                            ))}
                    </Grid>
                )}

                {!loading && !error && filteredAndSorted.length === 0 ? (
                    <Message>{UI_TEXT.EMPTY_STATE}</Message>
                ) : null}
            </Page>
        </>
    );
}
