import styled, {keyframes} from "styled-components";

const shimmer = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

export const Card = styled.article`
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.05);
    min-height: 220px;
`;

export const Shine = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.10) 45%,
            rgba(255, 255, 255, 0.18) 50%,
            rgba(255, 255, 255, 0.10) 55%,
            transparent 100%
    );
    animation: ${shimmer} 1.15s ease-in-out infinite;
`;

export const Block = styled.div<{ $h: number; $w?: string }>`
    height: ${(p) => p.$h}px;
    width: ${(p) => p.$w || "100%"};
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
`;

export const Top = styled.div`
    height: 120px;
    background: rgba(255, 255, 255, 0.06);
`;

export const Body = styled.div`
    padding: 14px 14px 16px;
    display: grid;
    gap: 10px;
`;
