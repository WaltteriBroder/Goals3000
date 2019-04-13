import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  body {
    margin: 0;
    padding: 10px;
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

  .header {
    margin-bottom: 3em;
  }

  .header h1 {
    font-size: 3em;
    //font-weight: lighter;
  }
`;