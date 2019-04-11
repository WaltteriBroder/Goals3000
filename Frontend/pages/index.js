import { useState, useEffect } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { apiRootUrl } from '../utils';
import { body } from '../styles/global';
import { goalList } from '../styles/goals';

const renderGoals = goals => {
  if (goals.length === 0) return;

  return goals.map(goal => {
    return (
      <div key={goal.id} className="goal-card">
        <div className="goal-title">
          {goal.goalName}
        </div>
        
        <style jsx>{goalList}</style>
      </div>
    );
  });
}

const Index = () => {
  const [goals, setGoals] = useState([]);

  console.log('process.env.NODE_ENV => ', process.env.NODE_ENV);
  console.log('root url => ', apiRootUrl);

  const fetchGoals = async () => {
    const res = await fetch(`${apiRootUrl}/goals/list/1`); // kovakoodattu user 1
    const data = await res.json();
    console.log('fetchGoals: ', data);
    setGoals(data);
  }

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div>
      <div className="header">
        <h2>Terve tää on joku dashboard</h2>
      </div>
      <div>
        <div>
          {renderGoals(goals)}
        </div>
      </div>
      <footer className="footer">

      </footer>
  
      <style jsx global>{body}</style>
    </div>
  )
};

export default Index;