import { useState, useEffect } from 'react';
import useGlobalHook from '../store';
import fetch from 'isomorphic-unfetch';
import apiRootUrl from '../utils/apiRoute';
import { goalList } from '../styles/goals';

const GoalCard = ({ goal }) => {
  const [globalState, globalActions] = useGlobalHook();
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value);
  }

  const postProgress = async () => {
    await fetch(`${apiRootUrl}/goals/daily`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: goal.id,
        quantity: quantity
      })
    })

    return globalActions.fetchGoals();
  }

  const handleSubmit = e => {
    e.preventDefault();
    postProgress();
    setQuantity('');
    toggleModal();
  }

  console.log(quantity);

  return (
    <div className="goal-card">
      <div className="goal-title">
        {goal.goalName}
      </div>
      <div className="goal-progress">
        <div>
          {`${goal.achieved} / ${goal.quantity}`}
        </div>
        <div className="add-progress">
          <button className="add-progress-toggle" onClick={() => toggleModal()}>
            add progress
          </button>
          <div className="form-container">
            <form onSubmit={handleSubmit} visible={`${modalVisible}`}>
              <label className="quantity-label">
                quantity
              </label>
              <div className="input-row">
                <input type="number" onChange={handleQuantityChange} />
                <button type="submit" className="add-progress-btn">
                  add
                </button>
                <button type="button" onClick={() => toggleModal()}>
                  close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{goalList}</style>
    </div>
  );
}

export default GoalCard;