import { useState, useEffect } from 'react';
import useGlobalHook from '../store';
import fetch from 'isomorphic-unfetch';
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
  const [goals, setGoals] = useState([]);

  console.log('process.env.NODE_ENV => ', process.env.NODE_ENV);
  console.log('root url => ', apiRootUrl);
  console.log('globalState.testi => ', globalState.test);

  useEffect(() => {
    globalActions.fetchGoals();
  }, []);

  return (
    <div>
      <div className="header">
        <h1>
          Terve tähän tulee joku dashboard
        </h1>
      </div>
      <div>
        <div>
          {renderGoals(globalState.goals)}
        </div>
      </div>
      {globalState.test}
  
      <style jsx global>{body}</style>
    </div>
  )
};

export default GoalList;