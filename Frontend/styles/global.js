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

  .container {
    min-height: 100vh;
    border: 2px solid goldenrod;
  }
  
  .container[blur="true"] {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }

  .header {
    margin-bottom: 3em;
  }

  .header h1 {
    font-size: 1.8em;
    //font-weight: lighter;
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

  @media only screen and (min-width: 565px) {
    .header h1 {
      font-size: 3em;
    }
  }
`;