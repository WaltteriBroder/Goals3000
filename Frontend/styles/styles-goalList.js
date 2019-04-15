import css from 'styled-jsx/css';

export const goalList = css`
  .goal-list-top {
    padding: 1em;
    padding-right: 0;
    padding-bottom: .5em;
    text-align: center;
  }

  .goal-list-top .add-goal-btn {
    font-size: 1em;
    padding: .2em 1em;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    box-shadow: none;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .goal-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;