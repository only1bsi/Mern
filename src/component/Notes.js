import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./notes.css"



function Notes(){

    // state
    const [notes, setNotes] = useState(null);
    const [createForm, setCreateForm] = useState({
    title: "",
    body: ""
   })

   // useEffect
   useEffect(() => {
   fetchNotes();
}, []);

   // Function
   const fetchNotes = async () => {
    // fetchNotes
    const res = await axios.get("http://localhost:5000/notes")
    setNotes(res.data.notes);
    console.log(res)
 }
 
   return(
    <div className='app_settingd outlet'>
    <h1>Notes:</h1>
    <div className='notes'>
    {notes && 
     notes.map((note) => {
        return (
            <div className='note-row'>
            <div key={note._id}>
                <h4>{note.hmos}</h4>
                <h4>{note.billedMonth}</h4>
                <h4>{note.billedAmount}</h4>
                <h4>{note.paidAmount}</h4>
                <h4>{note.diffrencies}</h4>
                <h4>{note.scannedCopies}</h4>
                <h4>{note.remarks}</h4>
            </div>
            </div>
        )
     })
    }
</div>
</div>
)}

export default Notes;