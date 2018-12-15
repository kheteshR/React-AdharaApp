import { combineReducers } from 'redux';
import Datareducers from './DataReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({

    listData: Datareducers,
    SelectedStylistId:SelectionReducer

});