import css from 'styled-jsx/css';

export const goalCard = css`
  .goal-card {
    display: flex;
    flex-flow: row wrap;
    background-color: #fff;
    border-radius: 1px;
    //border: 1px solid rgb(234, 234, 234);
    border: 1px solid #d1d5da;
    border-radius: 3px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .goal-card-left {
    flex-grow: 1;
  }

  .goal-card-right {
    flex-grow: 1;
  }

  .goal-title {
    color: #0366d6;
    font-size: 1.3rem;
    font-weight: bolder;
    padding-bottom: 2rem;
  }

  .progress-title {
    padding-bottom: .2rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .goal-progress {
    margin-bottom: 20px;
  }

  .add-progress {
    position: relative;
    padding-top: .5rem;
  }

  .goal-card form {
    position: absolute;
    z-index: 11;
    top: 100%;
    left: 0;
    margin-top: .2rem;
    padding: 10px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    transition: all ease-in-out 60ms;
    font-size: 1em;
  }

  .goal-card label {
    text-align: left;
    font-size: .8em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .goal-card .input-row {
    display: flex;
    padding-top: 2px;
  }

  .goal-card form input {
    font-size: 1.1em;
    width: 60px;
  }
  
  .goal-card form button {
    font-size: 1em;
    margin-left: 5px;
  }

  .goal-card form[visible="false"] {
    height: 0;
    padding: 0;
    border: none;
    opacity: 0;
    overflow: hidden;
  }

  .goal-dates > div {
    padding-bottom: .5em;
  }

  .goal-chart {
    height: 100%;
    position: relative;
    background-color: #efefef;
    opacity: .9;
  }

  @media only screen and (min-width: 565px) {
    .goal-card {
      //width: 400px;
      //max-width: 500px;
      //min-width: 400px;
    }
  }
`;