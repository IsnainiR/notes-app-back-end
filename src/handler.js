/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const { nanoid } = require('nanoid');
const notes = require('./notes');
// eslint-disable-next-line consistent-return
const addNoteHandler = (request, h) => {
  // eslint-disable-next-line no-unused-vars
  const { title, tags, body } = request.payload;
  // eslint-disable-next-line no-unused-vars
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  // eslint-disable-next-line no-unused-vars
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };
  // eslint-disable-next-line no-undef
  notes.push(newNote);

  // eslint-disable-next-line no-unused-vars
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
};
  const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });

  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef

  // eslint-disable-next-line no-unused-vars
  const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((n) => n.id === id)[0];
   // eslint-disable-next-line indent
   if (note !== undefined) {
      return {
        status: 'success',
        data: {
          note,
        },
      };
    }
    const response = h.response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    });
    response.code(404);
    return response;
  };
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }

 const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
  // eslint-disable-next-line no-undef
  module.exports = {
    addNoteHandler,
    // eslint-disable-next-line no-undef
    getAllNotesHandler,
    // eslint-disable-next-line no-undef
    getNoteByIdHandler,
    // eslint-disable-next-line no-undef
    editNoteByIdHandler,
    deleteNoteByIdHandler,
  };