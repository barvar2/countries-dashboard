import styled from "styled-components";

export const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Search = styled.input`
  width: 100%;
  padding: 12px 40px 12px 14px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--panel);
  outline: none;

  &:focus {
    border-color: rgba(124, 92, 255, 0.7);
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.15);
  }

  &::placeholder {
    color: var(--muted);
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 16px;
  line-height: 1;

  padding: 4px;
  border-radius: 30%;

  &:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid rgba(124, 92, 255, 0.6);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const SelectIcon = styled.img`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  opacity: 0.85;
  pointer-events: none;
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 270px;
  padding: 12px 44px 12px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background-color: var(--panel);
  color: var(--text);

  cursor: pointer;

  @media (max-width: 720px) {
    width: 100%;
  }

  &:focus {
    border-color: rgba(124, 92, 255, 0.7);
    box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.15);
  }
`;
