import { SocketActionType, SOCKET_MESSAGE, SOCKET_ERROR } from "./types"

export const on_socket_message = (payload:string): SocketActionType => ({
    type: SOCKET_MESSAGE,
    payload: payload
});

export const on_socket_error = (payload:string): SocketActionType => ({
    type: SOCKET_ERROR,
    payload: payload
});