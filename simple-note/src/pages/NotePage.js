import React, { useState, useEffect} from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useParams, Link } from 'react-router-dom';

function NotePage() {
  let { id } = useParams();

  let noteId = parseInt(id, 10);

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  return (
    <div className="note">

        <div className="note-header">
          <h3>
            <Link to="/">
              <ArrowLeft />
            </Link>
          </h3>
        </div>

        <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage