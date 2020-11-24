import { SocketActionType, SOCKET_MESSAGE } from "./types"

export const on_socket_message = (payload:string): SocketActionType => ({
    type: SOCKET_MESSAGE,
    payload: payload
});