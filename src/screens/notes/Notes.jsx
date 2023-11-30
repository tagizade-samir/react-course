import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import {useDispatch, useSelector} from '../../redux/ReduxProvider'
import {addNoteActionCreator, deleteNoteActionCreator} from '../../redux/notesSlice'

export const Notes = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notesScreen.notes)

  const handleChangeName = event => {
    setName(event.target.value)
  }

  const handleCreateNote = () => {
    const newNote = {
      id: uuid(),
      title: name,
    }
    dispatch(addNoteActionCreator(newNote))
    setName('')
  }

  const handleDeleteNote = id => {
    dispatch(deleteNoteActionCreator(id))
  }

  return (
    <div style={{width: '60%'}}>
      <div>Notes</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10}}>
        <input onChange={handleChangeName} value={name} />
        <button onClick={handleCreateNote}>Create a note</button>
      </div>
      <div style={{marginTop: 25, backgroundColor: 'cornsilk', padding: '10px'}}>
        <p style={{color: 'black', textAlign: 'center'}}>Notes list</p>
        {notes && Array.isArray(notes)
          ? notes.map(note => (
              <div
                style={{color: 'black', border: '1px solid black', padding: 25, borderRadius: 4}}
                key={note.id}>
                <p>Name: {note.title}</p>
                <p>Id: {note.id}</p>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            ))
          : 'Something is wrong'}
      </div>
    </div>
  )
}
