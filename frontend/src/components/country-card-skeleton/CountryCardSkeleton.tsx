import {memo} from "react";
import {Block, Body, Card, Shine, Top} from "./CountryCardSkeleton.styles.ts";

function CountryCardSkeletonBase() {
    return (
        <Card aria-hidden="true">
            <Top/>
            <Body>
                <Block $h={18} $w="70%"/>
                <Block $h={12} $w="90%"/>
                <Block $h={12} $w="60%"/>
            </Body>
            <Shine/>
        </Card>
    );
}

export const CountryCardSkeleton = memo(CountryCardSkeletonBase);
