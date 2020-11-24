import { eventChannel as event_channel } from 'redux-saga'
import { ws } from '../services/socket_connection';

export const create_message_channel = (): Object => {
  return event_channel((emit: Function) => {
    const message_handler = (event:Event) => {
      emit(event)
    }

    ws.onmessage = message_handler;

    const unsubscribe = () => {
      ws.close();
    }

    return unsubscribe;
  })
}
