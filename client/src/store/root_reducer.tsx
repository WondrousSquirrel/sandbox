import { combineReducers as combine_reducers } from 'redux';
import websocket_reducer from '../reducer/websocket_reducer';

const root_reducer = combine_reducers({
    socket_reducer: websocket_reducer
})

export default root_reducer;