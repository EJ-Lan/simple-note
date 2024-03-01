import React from 'react';
import { useParams } from 'react-router-dom';

import notes from '../assets/data';

function NotePage() {
  let { id } = useParams();

  let noteId = parseInt(id, 10);

  let note = notes.find(note => note.id === noteId)

  return (
    <div>
        <p>{note?.body}</p>
    </div>
  )
}

export default NotePage