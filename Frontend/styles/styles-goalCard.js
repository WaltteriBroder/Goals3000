import css from 'styled-jsx/css';

export const goalCard = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');

  .goal-card {
    flex-grow: 1;
    width: calc(100% - 2em);
    background-color: #ffffff;
    border-radius: 1px;
    border: 1px solid #eaeaea;
    padding: 1em;
    margin: 1em;
    margin-bottom: 0;
  }
  
  .goal-card .goal-title {
    font-family: 'Lato';
    text-align: center;
    font-size: 2.2em;
    font-weight: lighter;
    padding-bottom: 40px;
  }

  .goal-dates {
    text-align: center;
  }

  .goal-card .progress-title {
    padding-bottom: 3px;
    text-align: center;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;
  }

  .goal-card .goal-progress {
    /* display: flex;
    flex-flow: row;
    flex-wrap: nowrap; */
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }

  .goal-card .add-progress {
    position: relative;
  }

  .goal-card div.form-container {
    font-size: 1rem;
  }

  .goal-card .form-container form {
    position: absolute;
    z-index: 11;
    top: 100%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    margin-top: .3em;
    padding: 10px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    transition: all ease-in-out 60ms;
    font-size: 1em;
  }

  .goal-card .form-container, label {
    text-align: left;
    font-size: .8em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .goal-card .form-container, .input-row {
    display: flex;
    padding-top: 2px;
  }

  .goal-card .form-container form input {
    font-size: 1.1em;
    width: 60px;
  }
  
  .goal-card .form-container form button {
    font-size: 1em;
    margin-left: 5px;
  }

  .goal-card .form-container form[visible="false"] {
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
    height: 300px;
    margin-top: 1em;
    position: relative;
    background-color: #efefef;
    opacity: .9;
  }

  .goal-chart:before {
    content: "js-chart goes here";
    display: block;
    width: 200px;
    padding-top: 130px;
    margin: auto;
    text-align: center;
  }

  @media only screen and (min-width: 565px) {
    .goal-card {
      width: 400px;
      max-width: 500px;
      //min-width: 400px;
    }
  }
`;