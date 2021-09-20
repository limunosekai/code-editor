import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';

const rootReducer = combineReducers({
  cells: CellsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;