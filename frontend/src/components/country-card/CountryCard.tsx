import {memo} from "react";
import type {Country} from "../../types/countries.ts";
import {formatPopulation} from "../../utils/format.ts";
import {UI_TEXT} from "../../constants/uiText.ts";

import {
    Body,
    Card,
    Flag,
    FlagWrap,
    Label,
    Row,
    Title,
    Value,
} from "./CountryCard.styles.ts";

type Props = { country: Country };

function CountryCardBase({country}: Props) {
    return (
        <Card>
            <FlagWrap>
                {country.flagUrl ? (
                    <Flag
                        src={country.flagUrl}
                        alt={country.flagAlt}
                        loading="lazy"
                    />
                ) : null}
            </FlagWrap>

            <Body>
                <Title title={country.name}>{country.name}</Title>

                <Row>
                    <Label>{UI_TEXT.COUNTRY_CARD.CAPITAL_LABEL}</Label>
                    <Value>{country.capital}</Value>
                </Row>

                <Row>
                    <Label>{UI_TEXT.COUNTRY_CARD.POPULATION_LABEL}</Label>
                    <Value>{formatPopulation(country.population)}</Value>
                </Row>
            </Body>
        </Card>
    );
}

export const CountryCard = memo(CountryCardBase);
