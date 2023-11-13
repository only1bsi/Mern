import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from './redux/note/noteActions';




function NotesContainer ({ noteData, fetchNotes }) {
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    noteData.loading ? (
      <h2>Loading</h2>
    ) : noteData.error ? (
      <h2>{noteData.error}</h2>
    ) : (
      <div>
        <h2>Notes List</h2>
        <div>
          {noteData.notes.map((note) => (
            <div key={note.id}>
              <p>{note.hmos}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    noteData: state.note,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);