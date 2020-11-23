import { SOCKET_MESSAGE } from "../actions/types";

const initial_state = {
};

interface Iaction {
    type: string;
    payload: any;
}

export default (state = initial_state, { type, payload }: Iaction) => {
    switch (type) {
        case SOCKET_MESSAGE: {
            return  payload;
        }
        default:
            return state;
    }
}