import { eventChannel as event_channel } from 'redux-saga'
import store from '../store/store';
import { ws } from '../services/socket_connection';
import { on_socket_error } from '../actions/actions';

export const create_message_channel = (): Object => {
  return event_channel((emit: Function) => {

    const connect_handler = () => {
      console.log('Socket Connected');
    }
    const error_handler = (error: Event) => {
      store.dispatch(on_socket_error('Error while connection to server'))
      console.log('Socket Error ' + error);
    }

    const message_handler = (event:Event) => {
      emit(event)
    }

    ws.onopen = connect_handler;
    ws.onmessage = message_handler;
    ws.onerror = error_handler;

    const unsubscribe = () => {
      ws.close();
    }

    return unsubscribe;
  })
}
