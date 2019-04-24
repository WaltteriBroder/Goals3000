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

  label {
    display: block;
  }

  .relative-container {
    position: relative;
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

  .btn-primary {

  }

  .btn-primary {
    color: #fff;
    background-color: #099cec;
    border: 1px solid #099cec;
    border-radius: 5px;
    outline: none;
    transition: background-color .1s cubic-bezier(.25,.8,.25,1),
                border-color .2s cubic-bezier(.25,.8,.25,1);
  }

  .btn-primary:active {
    background-color: #0880C2;
    border: 1px solid #0880C2;
  }
`;