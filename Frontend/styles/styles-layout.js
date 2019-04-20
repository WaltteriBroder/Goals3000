import css from 'styled-jsx/css';

export const layout = css`
  .app[blur="true"] {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }
  
  .app-header {
    padding: 2rem;
    box-shadow: 0px -9px 39px 0px rgba(214,214,214,1);
    text-align: center;
  }

  .app-header h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  .app-footer {
    background-color: #2b2b2b;
    color: #ddd;
    padding: 1rem;
    min-height: 90px;
    height: 12vh;
  }

  .app-content {
    flex-grow: 1;
    padding-top: 3rem;
    padding-bottom: 6rem;
  }

  @media only screen and (min-width: 565px) {
    .app-header h1 {
      font-size: 2rem;
    }
  }
`;