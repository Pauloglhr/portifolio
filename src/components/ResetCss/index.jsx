import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
    *{
        font-family: 'Inter', sans-serif;
        color: #D9D9D9;
    }
    html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    }
    body {
    margin: 0;
    min-height: 100vh;
    background-color: #000000;
    }
    main {
    display: block;
    }
    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }
    hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
    }
    a {
    background-color: transparent;
    }
    abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
    }
    b,
    strong {
    font-weight: bolder;
    }
    code,
    kbd,
    samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }
    sub {
    bottom: -0.25em;
    }
    sup {
    top: -0.5em;
    }
    img {
    border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    }
    button,
    input { 
    overflow: visible;
    }
    button,
    select { 
    text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }
    legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
    }
    progress {
    vertical-align: baseline;
    }
    textarea {
    overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
    appearance: textfield; 
    outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
    }
    details {
    display: block;
    }
    summary {
    display: list-item;
    }
    template {
    display: none;
    }
    [hidden] {
    display: none;
    }
    @keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.2;
    transform: translateY(-35%);
  }
}

/* Animação para a nova página que está entrando */
@keyframes slide-in {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

/* Aplica as animações durante a transição */
::view-transition-old(root) {
  animation: slide-out 1.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

::view-transition-new(root) {
  animation: slide-in 1.5s cubic-bezier(0.87, 0, 0.13, 1) forwards;
}
`;

export default ResetCss;
