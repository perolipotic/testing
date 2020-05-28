export default ({ dispatch }) => (next) => (action) => {
  //Check to see if the action has a promise on its payload
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //there is a promise wait for promise resolve and
  //create a new action and dispatch that action
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
