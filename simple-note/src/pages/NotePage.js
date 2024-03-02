import React, { useEffect, useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Note = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const noteId = id;
    const [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId]);

    const getNote = async () => {
        if (noteId === 'new') return;
        let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`);
        let data = await response.json();
        setNote(data);
    };

    const createNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...note, 'updated': new Date() }),
        });
    };

    const updateNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...note, 'updated': new Date() }),
        });
    };

    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        navigate('/');
    };

    const handleSubmit = async () => {
        if (noteId !== 'new' && !note?.body) {
            await deleteNote();
        } else if (noteId !== 'new') {
            await updateNote();
        } else if (noteId === 'new' && note !== null) {
            await createNote();
        }
        navigate('/');
    };

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => setNote({ ...note, 'body': e.target.value })} placeholder="Edit note" value={note?.body || ''}></textarea>
        </div>
    );
};

export default Note;