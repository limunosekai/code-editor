import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';
import BundlesReducer from './bundlesReducer';

const rootReducer = combineReducers({
  cells: CellsReducer,
  bundles: BundlesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;