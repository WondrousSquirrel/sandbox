import { take, call, put } from 'redux-saga/effects';
import { SOCKET_MESSAGE } from '../actions/types';
import { create_message_channel } from './create_message_channel';

const  get_text = async (data:Blob) => await data.text() 

export function * websocket_message_saga  () {
    const channel = yield call(create_message_channel);
    while(true) {
        const message = yield take(channel);
        let text = yield call(get_text, message.data);
        yield put({ type: SOCKET_MESSAGE, payload: text });
    }
}