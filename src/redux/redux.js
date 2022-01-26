import React from "react";

// REDUX
// 1. current state from UI
// 2. dispatch(Eventhandler)
// 3. action from dispatch
// 4. at Reducer in store, combine action and stored state
// 5. update state.
// 6. update UI

import { createStore } from "redux";

const Redux = () => {
  const reducer = (state = 0, action) => {
    // if (action.type === 'INCREMENT') {
    //   return state + 1;
    // } else if (action.type === 'DECREMENT') {
    //   return state - 1;
    // }
    // return state;

    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload;
      case 'DECREMENT':
        return state - action.payload;
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  store.subscribe(() => {
    console.log("current state", store.getState());
  });

  store.dispatch({
    type: 'INCREMENT',
    payload: 1
  })
  store.dispatch({
    type: 'INCREMENT',
    payload: 4
  });
  store.dispatch({
    type: 'DECREMENT',
    payload: 2
  });

  return (
    <div>
      This is Redux
    </div>
  )
};

export default Redux;
