import css from 'styled-jsx/css';

export const goalList = css`
  .goal-list-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .goal-list {
    flex-grow: 1;
    max-width: 1000px;
  }

  .goal-list-top {
    padding-bottom: 1.5rem;
  }

  .goals {
    
  }


  .add-goal-btn {
    color: #fff;
    font-size: 1.1rem;
    font-weight: bolder;
    padding: .4rem 1.4rem;
    background-color: #099cec;
    border: 1px solid #099cec;
    border-radius: 5px;
    outline: none;
    transition: background-color .1s cubic-bezier(.25,.8,.25,1),
                border-color .2s cubic-bezier(.25,.8,.25,1);
  }

  .add-goal-btn:active {
    background-color: #0880C2;
    border: 1px solid #0880C2;
  }
`;