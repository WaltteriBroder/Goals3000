import useGlobalHook from '../store';
import PageHead from '../utils/pageHead';
import GoalList from '../components/goalList';
import NewGoalModal from '../components/newGoalModal';
import { body } from '../styles/styles-global';
import { layout } from '../styles/styles-layout';

const Index = () => {
  const [globalState, globalActions] = useGlobalHook();

  return (
    <div className="app" blur={`${globalState.newGoalModalOpen}`}>
      <PageHead />
      <NewGoalModal visible={globalState.newGoalModalOpen} />
      <div className="header">
        <h1> This is some dashboard </h1>
      </div>
      
      <div className="flex-container">
        <div className="container">
          <GoalList />
        </div>
      </div>
  
      <style jsx>{layout}</style>
      <style jsx global>{body}</style>
    </div>
  );
};

export default Index;