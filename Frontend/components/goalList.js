import { useEffect } from 'react';
import useGlobalHook from '../store';
import apiRootUrl from '../utils/apiRoute';
import GoalCard from './goalCard';
import { goalList } from '../styles/styles-goalList';

const renderGoals = goals => {
  if (!goals || goals.length === 0) return;

  return goals.map(goal => {
    return (
      <GoalCard goal={goal} key={goal.id} />
    );
  });
}

const GoalList = () => {
  const [globalState, globalActions] = useGlobalHook();

  console.log('process.env.NODE_ENV => ', process.env.NODE_ENV);
  console.log('root url => ', apiRootUrl);

  useEffect(() => {
    globalActions.fetchGoals();
  }, []);

  return (
    <div className="goal-list">
      <div className="goal-list-top">
        <button className="add-goal-btn" onClick={() => globalActions.toggleNewGoalModal()}>
          add new goal
        </button>
      </div>
      <div>
        {renderGoals(globalState.goals)}
      </div>
  
      <style jsx>{goalList}</style>
    </div>
  )
};

export default GoalList;