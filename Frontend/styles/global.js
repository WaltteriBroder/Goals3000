import css from 'styled-jsx/css';

// global styles
export const body = css.global`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    margin: 0;
    padding: 10px;
    color: #333333;
    //background-color: #f9f9f9;
    font-family: 'Open Sans',
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
`;