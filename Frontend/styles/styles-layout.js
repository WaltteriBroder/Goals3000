import css from 'styled-jsx/css';

export const layout = css`
  .app[blur="true"] {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }

  .app > .header {
    margin-bottom: 3em;
  }

  .app > .header h1 {
    font-size: 1.8em;
    //font-weight: lighter;
  }

  .flex-container {
    min-height: 100vh;
    border: 1px solid goldenrod;
  }

  @media only screen and (min-width: 565px) {
    .app > .header h1 {
      font-size: 3em;
    }
  }
`;