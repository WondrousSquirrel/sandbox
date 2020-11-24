import { SocketActionType, SOCKET_MESSAGE } from "../actions/types";
import { SocketState } from "../store/types";

const initial_state: SocketState = {
    socket_reducer: ''
};

export default (state = initial_state, { type, payload }: SocketActionType): string | SocketState => {
    switch (type) {
        case SOCKET_MESSAGE: {
            return  payload;
        }
        default:
            return state;
    }
}