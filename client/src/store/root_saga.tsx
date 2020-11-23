import { fork } from 'redux-saga/effects'
import { websocket_message_saga } from '../sagas/websocket_message_saga'

export default function* root_saga() {
    // yield all([...Object.values(websocket_saga)].map(fork))
    yield fork(websocket_message_saga);
}