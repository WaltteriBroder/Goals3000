import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  body {
    font-family: sans-serif;
  }

  button {
    text-transform: none;
    cursor: pointer;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  .nappula {
    margin-top: 1em;
    font-size: 1.1em;
    border: thin solid #000;
  }
`;