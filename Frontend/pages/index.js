import PageHead from '../utils/pageHead';
import GoalList from '../components/goalList';
import { body } from '../styles/global';

const Index = () => {

  return (
    <div>
      <PageHead />
      <GoalList />
  
      <style jsx global>{body}</style>
    </div>
  );
};

export default Index;