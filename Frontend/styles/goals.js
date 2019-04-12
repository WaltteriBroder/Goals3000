import css from 'styled-jsx/css';

export const goalList = css`
  .goal-card {
    max-width: 700px;
    background-color: #ffffff;
    border-radius: 1px;
    //border: 1px solid #eaeaea;
    padding: 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
  
  .goal-card:nth-last-child(n + 2) {
    margin-bottom: 2em;
  }

  .goal-card .goal-title {
    font-size: 2em;
    padding-bottom: 1em;
  }
`;