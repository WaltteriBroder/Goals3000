import css from 'styled-jsx/css';

export const newGoalModal = css`
  .new-goal-modal {
    position: absolute;
    z-index: 1;
    left: 0; top: 20vh; right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
    width: 90vw;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    opacity: 1;
    transition: all ease-in-out 90ms;

    -webkit-filter: blur(0);
    -moz-filter: blur(0);
    -o-filter: blur(0);
    -ms-filter: blur(0);
    filter: blur(0);
  }

  .new-goal-modal .close-btn {
    position: absolute;
    top: 0; right: 10px;
    font-size: 2em;
    font-weight: bold;
  }

  .new-goal-modal .modal-container {
    padding: 1em;
    padding-top: .75em;
  }

  .new-goal-modal .modal-container .add-goal-title {
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 3em;
  }

  .new-goal-modal form input {
    display: block;
    margin-bottom: 1em;
  }

  .new-goal-modal form button {
    display: block;
  }
`;