export const SOCKET_OPEN = 'SOCKET_OPEN';
export const SOCKET_CLOSE = 'SOCKET_CLOSE';
export const SOCKET_MESSAGE = 'SOCKET_MESSAGE'

interface OnSocketMessageAction {
    type: typeof SOCKET_MESSAGE
    payload: string
};

export type SocketActionType =  OnSocketMessageAction;
