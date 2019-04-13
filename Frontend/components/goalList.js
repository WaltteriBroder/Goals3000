import { useEffect } from 'react';
import useGlobalHook from '../store';
import apiRootUrl from '../utils/apiRoute';
import { body } from '../styles/global';
import GoalCard from './goalCard';


const renderGoals = goals => {
  if (!goals) return;
  if (goals.length === 0) return;

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
    <div>
      <div className="header">
        <h1>
          This is some dashboard
        </h1>
      </div>
      <div>
        <div>
          {renderGoals(globalState.goals)}
        </div>
      </div>
  
      <style jsx global>{body}</style>
    </div>
  )
};

export default GoalList;