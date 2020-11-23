import { call } from 'redux-saga/effects'
import { eventChannel as event_channel } from 'redux-saga'
import { on_socket_open, on_socket_close, on_socket_message } from '../actions/actions'
import { ws } from '../services/socket_connection';

export const create_message_channel = () => {
  return event_channel((emit: any) => {
    const message_handler = (event:any) => {
      emit(event)
    }

    ws.onmessage = message_handler;

    const unsubscribe = () => {
      ws.close();
    }

    return unsubscribe;
  })
}
