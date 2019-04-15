import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  body {
    margin: 0;
    padding: 0;
    color: #292f33;
    background-color: #fff;
    font-family: //'Open Sans',
                 -apple-system,
                 BlinkMacSystemFont,
                 "Segoe UI",
                 "Roboto",
                 "Oxygen",
                 "Ubuntu",
                 "Cantarell",
                 "Fira Sans",
                 "Droid Sans",
                 "Helvetica Neue",
                 sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    font-family: inherit;
    text-transform: none;
    cursor: pointer;
  }

  .btn-reset {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  label {
    display: block;
  }

  .relative-container {
    position: relative;
  }
`;