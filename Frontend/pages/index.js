import useGlobalHook from '../store';
import PageHead from '../utils/pageHead';
import GoalList from '../components/goalList';
import NewGoalModal from '../components/newGoalModal';
import { body } from '../styles/global';

const Index = () => {
  const [globalState, globalActions] = useGlobalHook();

  console.log(globalState.newGoalModalOpen);

  return (
    <div>
      <PageHead />
      <NewGoalModal visible={globalState.newGoalModalOpen} />
      
      <div className="container" blur={`${globalState.newGoalModalOpen}`}>
        <div className="header">
          <h1> This is some dashboard </h1>
        </div>
        <GoalList />
      </div>
  
      <style jsx global>{body}</style>
    </div>
  );
};

export default Index;