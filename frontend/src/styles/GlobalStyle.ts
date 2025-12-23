import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b1020;
    --panel: rgba(255, 255, 255, 0.06);
    --panel-strong: rgba(255, 255, 255, 0.10);
    --text: rgba(255, 255, 255, 0.92);
    --muted: rgba(255, 255, 255, 0.70);
    --border: rgba(255, 255, 255, 0.14);
    --accent: #7c5cff;
    --danger: #ff4d6d;

    --radius: 18px;
  }

  * { box-sizing: border-box; }
  html, body { height: 100%; }

  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
    color: var(--text);
      background: var(--bg);
  }

  button, input, select { font: inherit; color: inherit; }
`;
