import { SOCKET_OPEN, SOCKET_CLOSE } from "./types"

export const on_socket_open = (payload:any) => ({
    type: SOCKET_OPEN,
    payload: payload
});

export const on_socket_close = (payload:any) => ({
    type: SOCKET_CLOSE,
    payload: payload
});

export const on_socket_message = (payload:any) => ({
    type: SOCKET_CLOSE,
    payload: payload
});