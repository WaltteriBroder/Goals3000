import { useState } from 'react';
import useGlobalHook from '../store';
import fetch from 'isomorphic-unfetch';
import GoalChart from './goalChart';
import apiRootUrl from '../utils/apiRoute';
import { goalCard } from '../styles/styles-goalCard';
import differenceInDays from 'date-fns/difference_in_days';
import addYears from 'date-fns/add_years';

const GoalCard = ({ goal }) => {
  const [globalState, globalActions] = useGlobalHook();
  const [formVisible, setFormVisible] = useState(false);
  const [quantity, setQuantity] = useState('');

  const getRemainingDays = () => {
    const startDate = new Date(goal.added);
    const endDate = addYears(startDate, 1) - 1;
    const result = differenceInDays(endDate, new Date());
    return result;
  }

  const toggleForm = () => {
    setFormVisible(!formVisible);
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
    toggleForm();
  }

  return (
    <div className="goal-card">
      <div className="goal-card-left">
        <div className="goal-title">
          {goal.goalName}
        </div>
        <div className="progress-title">
          progress
        </div>
        <div className="goal-progress">
          <div>
            {`${goal.achieved} / ${goal.quantity}`}
          </div>
          <div className="add-progress">
            <button className="add-progress-toggle" onClick={() => toggleForm()}>
              add progress
            </button>
            <form onSubmit={handleSubmit} visible={`${formVisible}`}>
              <label className="quantity-label">
                add
              </label>
              <div className="input-row">
                <input type="number" onChange={handleQuantityChange} />
                <button type="submit" className="add-progress-btn">
                  add
                </button>
                <button type="button" onClick={() => toggleForm()}>
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="goal-dates">
          <div className="goal-added">
            Goal started: <b>{new Date(goal.added).toLocaleDateString()}</b>
          </div>
          <div className="goal-duration">
            Duration: <b>365 days</b>
          </div>
          <div className="goal-remaining">
            Left: <b>{getRemainingDays()} days</b>
          </div>
        </div>
      </div>
      <div className="goal-card-right">
        <GoalChart goal={goal} />
      </div>

      <style jsx>{goalCard}</style>
    </div>
  );
}

export default GoalCard;