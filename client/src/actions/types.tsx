export const SOCKET_MESSAGE = 'SOCKET_MESSAGE'
export const SOCKET_ERROR = 'SOCKET_ERROR';

interface OnSocketMessageAction {
    type: typeof SOCKET_MESSAGE
    payload: string
};

interface OnSocketErrorAction {
    type: typeof SOCKET_ERROR
    payload: string
};


export type SocketActionType =  OnSocketMessageAction | OnSocketErrorAction;
