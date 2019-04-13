import { useState, useEffect } from 'react';
import useGlobalHook from '../store';
import fetch from 'isomorphic-unfetch';
import { apiRootUrl } from '../utils/apiRoute';
import { body } from '../styles/global';
import { goalList } from '../styles/goals';
import PageHead from '../utils/pageHead';

const renderGoals = goals => {
  if (goals.length === 0) return;

  return goals.map(goal => {
    return (
      <div key={goal.id} className="goal-card">
        <div className="goal-title">
          {goal.goalName}
        </div>
        <div className="goal-progress">
          {`${goal.achieved} / ${goal.quantity}`}
        </div>

        <style jsx>{goalList}</style>
      </div>
    );
  });
}

const Index = () => {
  const [globalState, globalActions] = useGlobalHook();
  const [goals, setGoals] = useState([]);

  console.log('process.env.NODE_ENV => ', process.env.NODE_ENV);
  console.log('root url => ', apiRootUrl);

  const fetchGoals = async () => {
    const res = await fetch(`${apiRootUrl}/goals/list/${globalState.user}`);
    const data = await res.json();
    console.log('fetchGoals: ', data);
    setGoals(data);
  }

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div>
      <PageHead />
      <div className="header">
        <h1>
          Terve tähän tulee joku dashboard
        </h1>
      </div>
      <div>
        <div>
          {renderGoals(goals)}
        </div>
      </div>
  
      <style jsx global>{body}</style>
    </div>
  )
};

export default Index;