import styled from "styled-components";

export const Card = styled.article`
  background: linear-gradient(180deg, var(--panel-strong), var(--panel));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
  transition: transform 160ms ease, border-color 160ms ease;
  min-height: 220px;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(124, 92, 255, 0.45);
  }
`;

export const FlagWrap = styled.div`
  width: 100%;
  height: 120px;
  background: rgba(255, 255, 255, 0.05);
`;

export const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 14px 14px 16px;
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.2;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 6px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &:first-of-type {
    border-top: 0;
    padding-top: 0;
  }
`;

export const Label = styled.span`
  color: var(--muted);
  font-size: 13px;
`;

export const Value = styled.span`
  font-size: 13px;
  text-align: right;
`;
