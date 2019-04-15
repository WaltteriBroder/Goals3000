import css from 'styled-jsx/css';

export const layout = css`
  @import url('https://fonts.googleapis.com/css?family=Shrikhand');

  .app[blur="true"] {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }

  .app > .header {
    display: flex;
    flex-flow: row nowrap;
    padding: 2em;
    background-color: #F7D24F;
    align-items: center;
  }

  .app > .header h1 {
    font-family: 'Shrikhand', sans-serif;
    font-size: 1.8em;
    margin: 0;
    //font-weight: lighter;
  }

  .flex-wrapper {
    min-height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    background-color: #F7F7F7;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  .container {
    flex-grow: 1;
    max-width: 1300px;
  }

  .footer {
    min-height: 300px;
    background-color: #272D2D;
    color: #fff;
  }

  @media only screen and (min-width: 565px) {
    .app > .header h1 {
      font-size: 3em;
    }
  }
`;