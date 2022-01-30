/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line no-unused-vars
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  // eslint-disable-next-line no-unused-vars
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    // eslint-disable-next-line no-undef
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    // eslint-disable-next-line no-undef
    handler: deleteNoteByIdHandler,
  },
];
// eslint-disable-next-line eol-last
module.exports = { addNoteHandler, getAllNotesHandler };