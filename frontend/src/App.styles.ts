import styled from "styled-components";

export const StickyHeader = styled.div<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 20;

  background: var(--bg);
  padding-top: 18px;
  padding-bottom: 12px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: box-shadow 0.2s ease;

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 16px rgba(255, 255, 255, 0.08)" : "none"};
`;

export const StickyInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StickyPanel = styled.section`
  margin-top: 12px;
  padding: 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
`;

export const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 16px 50px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 26px;
  letter-spacing: 0.2px;
`;

export const Grid = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 13px;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.05);
`;

export const Message = styled.div`
  margin-top: 14px;
  padding: 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.06);
  color: var(--muted);
`;

export const ErrorBox = styled(Message)`
  border-color: rgba(255, 77, 109, 0.35);
  color: rgba(255, 255, 255, 0.88);

  b {
    color: var(--danger);
  }
`;

export const HintText = styled.div`
  margin-top: 8px;
  color: var(--muted);

  code {
    background: rgba(255, 255, 255, 0.08);
    padding: 2px 6px;
    border-radius: 6px;
  }
`;

export const RetryButton = styled.button`
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;

  &:hover {
    border-color: rgba(124, 92, 255, 0.45);
  }
`;
