<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6138420 (front end update)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./notes.css"


<<<<<<< HEAD

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
=======
import notesStore from "./stores/notesStore";
import Note from "./Note";
=======
>>>>>>> 6138420 (front end update)

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
<<<<<<< HEAD
      <div>
      <h2>Notes:</h2>
      {store.notes &&
        store.notes.map((note) => {
          return (
       <Note note={note} key={note}/>
        );
      })}
    </div>
>>>>>>> e369d7f (first commit)
=======
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
>>>>>>> 6138420 (front end update)
)}

export default Notes;