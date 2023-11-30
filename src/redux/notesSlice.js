export const NOTES_ACTION_TYPES = {
  addNote: 'ADD_NOTE',
  deleteNote: 'DELETE_NOTE',
}

export const addNoteActionCreator = newNote => ({
  type: NOTES_ACTION_TYPES.addNote,
  payload: newNote,
})

export const deleteNoteActionCreator = idToDelete => ({
  type: NOTES_ACTION_TYPES.deleteNote,
  payload: idToDelete,
})

export const notesReducer = (state, action) => {
  switch (action.type) {
    case NOTES_ACTION_TYPES.addNote:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        count: state.count++,
      }
    case NOTES_ACTION_TYPES.deleteNote:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        count: state.count--,
      }
    default:
      return state
  }
}
