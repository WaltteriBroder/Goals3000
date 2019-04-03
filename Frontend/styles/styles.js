import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  body {
    font-family: sans-serif;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    font-family: inherit;
  }
  
  button {
    text-transform: none;
    cursor: pointer;
  }

  .nappula {
    margin-top: 1em;
    font-size: 1.1em;
    border: thin solid #000;
  }
`;