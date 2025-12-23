import {memo} from "react";
import type {SortKey} from "../../types/countries.ts";
import {UI_TEXT} from "../../constants/uiText.ts";

import {
    Bar,
    ClearButton,
    Search,
    SearchWrapper,
    Select,
    SelectIcon,
    SelectWrapper,
} from "./Controls.styles.ts";

type Props = {
    search: string;
    sort: SortKey;
    onSearchChange: (value: string) => void;
    onSortChange: (value: SortKey) => void;
};

function ControlsBase({search, sort, onSearchChange, onSortChange}: Props) {
    return (
        <Bar>
            <SearchWrapper>
                <Search
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={UI_TEXT.CONTROLS.SEARCH_PLACEHOLDER}
                    aria-label={UI_TEXT.CONTROLS.SEARCH_ARIA}
                />

                {search.length > 0 && (
                    <ClearButton
                        type="button"
                        aria-label={UI_TEXT.CONTROLS.CLEAR_ARIA}
                        onClick={() => onSearchChange("")}
                    >
                        ✕
                    </ClearButton>
                )}
            </SearchWrapper>

            <SelectWrapper>
                <Select
                    value={sort}
                    onChange={(e) => onSortChange(e.target.value as SortKey)}
                    aria-label={UI_TEXT.CONTROLS.SORT_ARIA}
                >
                    <option value="name-asc">{UI_TEXT.CONTROLS.SORT_OPTIONS.NAME_ASC}</option>
                    <option value="name-desc">{UI_TEXT.CONTROLS.SORT_OPTIONS.NAME_DESC}</option>
                    <option value="pop-asc">{UI_TEXT.CONTROLS.SORT_OPTIONS.POP_ASC}</option>
                    <option value="pop-desc">{UI_TEXT.CONTROLS.SORT_OPTIONS.POP_DESC}</option>
                </Select>

                <SelectIcon src="/chevron-down.svg" alt="" aria-hidden="true"/>
            </SelectWrapper>
        </Bar>
    );
}

export const Controls = memo(ControlsBase);
