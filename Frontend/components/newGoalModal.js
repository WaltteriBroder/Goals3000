import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import useGlobalHook from '../store';
import apiRootUrl from '../utils/apiRoute';
import { newGoalModal } from '../styles/newGoalModal';

const NewGoalModal = ({ visible }) => {
  if (!visible) return null;

  const [globalState, globalActions] = useGlobalHook();
  const [goalName, setGoalName] = useState('');
  const [goalQuantity, setGoalQuantity] = useState('');

  const handleNameChange = ({ target }) => {
    setGoalName(target.value);
  }

  const handleQuantityChange = ({ target }) => {
    setGoalQuantity(target.value);
  }

  const postGoal = async () => {
    await fetch(`${apiRootUrl}/goals/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: goalQuantity,
        goalName: goalName,
        achieved: 0,
        userId: globalState.user
      })
    })

    return globalActions.fetchGoals();
  }

  const handleSubmit = e => {
    e.preventDefault();
    postGoal();
    setGoalName('')
    setGoalQuantity('');
    globalActions.toggleNewGoalModal()
  }

  return (
    <div className="new-goal-modal" visible={`${visible}`}>
      <div className="relative-container modal-container">
        <button className="btn-reset close-btn" onClick={() => globalActions.toggleNewGoalModal()}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className="add-goal-title">
            add new goal
          </div>
          <label>Goal name</label>
          <input type="text" name="goalName" onChange={handleNameChange} />
          <label>Quantity</label>
          <input type="number" name="goalQuantity" onChange={handleQuantityChange} />
          <button type="submit" className="add-goal-btn">
            ADD
          </button>
        </form>
      </div>

      <style jsx>{newGoalModal}</style>
    </div>
  );
}

export default NewGoalModal;