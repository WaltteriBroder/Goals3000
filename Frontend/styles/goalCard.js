import css from 'styled-jsx/css';

export const goalCard = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');

  .goal-card {
    max-width: 700px;
    background-color: #ffffff;
    border-radius: 1px;
    border: 1px solid #eaeaea;
    padding: 1em;
    padding-right: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  
  .goal-card:nth-last-child(n + 2) {
    margin-bottom: 2em;
  }

  .goal-card .goal-title {
    font-family: 'Lato';
    font-size: 2.2em;
    padding-bottom: 20px;
    font-weight: lighter;
  }

  .goal-card .goal-added {
    padding-bottom: 20px;
  }

  .goal-card .progress-title {
    padding-bottom: 3px;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: bold;
  }

  .goal-card .goal-progress {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
  }

  .goal-progress .add-progress {
    position: relative;
    margin-left: 1em;
  }

  .add-progress .form-container form {
    position: absolute;
    top: 100%; left: 0;
    padding: .75em;
    padding-top: 1em;
    margin-top: .3em;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    transition: all ease-in-out 60ms;
  }

  .add-progress .form-container, label {
    font-size: .8em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .add-progress .form-container, .input-row {
    display: flex;
    padding-top: 2px;
  }

  .add-progress .form-container form input {
    font-size: 1.1em;
    width: 60px;
    margin-right: .4em;
  }
  
  .add-progress .form-container form button {
    font-size: 1em;
    margin-left: .7em;
  }

  .add-progress .form-container form[visible="false"] {
    height: 0;
    padding: 0;
    border: none;
    opacity: 0;
    overflow: hidden;
  }
`;