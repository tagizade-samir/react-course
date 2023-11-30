import {notesReducer} from './notesSlice'

export const store = {
  _state: {
    notesScreen: {
      notes: [],
      count: 0,
    },
    chatsScreen: {
      chats: [
        {
          id: 1,
          name: 'Chat #1',
          unreadMessageCount: 5,
        },
      ],
    },
    profileScreen: {
      theme: 'dark',
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.notesScreen = notesReducer(this._state.notesScreen, action)
    this._callSubscriber(this._state, this.dispatch.bind(this))
  },
}
