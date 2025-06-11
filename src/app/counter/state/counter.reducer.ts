import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { InitialCounterState, initialCounterState } from "./counter.state";

const _counterReducer = createReducer(
  initialCounterState, // Pass the initial state here
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state: InitialCounterState | undefined, action: any): InitialCounterState {
  return _counterReducer(state ?? initialCounterState, action); // Handle undefined state
}