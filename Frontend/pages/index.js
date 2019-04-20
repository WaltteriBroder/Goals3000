import useGlobalHook from '../store';
import GoalList from '../components/goalList';
import NewGoalModal from '../components/newGoalModal';
import Layout from '../components/layout';

const Index = () => {
  const [globalState, globalActions] = useGlobalHook();

  return (
    <div>
      <NewGoalModal visible={globalState.newGoalModalOpen} />
      <Layout blur={`${globalState.newGoalModalOpen}`}>
        <GoalList />
      </Layout>
    </div>
  );
};

export default Index;