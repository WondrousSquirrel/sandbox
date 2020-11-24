import { SocketActionType, SOCKET_MESSAGE, SOCKET_ERROR } from "../actions/types";
import { SocketState } from "../store/types";

const initial_state: SocketState = {
    socket_reducer: ''
};

export default (state = initial_state, action: SocketActionType): string | SocketState => {
    switch (action.type) {
        case SOCKET_MESSAGE: {
            return  action.payload;
        }
        case SOCKET_ERROR: {
            console.log(action);
            return ''
        }
        default:
            return state;
    }
}