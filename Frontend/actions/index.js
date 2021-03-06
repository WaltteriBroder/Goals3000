import apiRootUrl from '../utils/apiRoute';

export const testiAction = (store, message) => {
  store.setState({ test: message });
}

export const fetchGoals = async store => {
  const res = await fetch(`${apiRootUrl}/goals/list/${store.state.user}`);
  const goals = await res.json();
  console.log('fetchGoals: ', goals);
  store.setState({ goals });
}

export const toggleNewGoalModal = store => {
  const value = !store.state.newGoalModalOpen;
  store.setState({ newGoalModalOpen: value });
}