const weight = 100;

export default function weightReducer(state = weight, action) {
  if (action.type === '증가') {
    const date = new Date().getDate();
    state = state + date;
    return state;
  } else if (action.type === '감소') {
    const month = new Date().getMonth() + 1;
    state = state - month;
    return state;
  }
  return state;
}
