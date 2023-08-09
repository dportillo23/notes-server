import { Router } from 'express';
import { NotesController } from './notes.controller';

const notesRouter = Router()
const notesController = new NotesController()

notesRouter.get('/notes', notesController.getNotes)
notesRouter.post('/notes', notesController.addNote)

export default notesRouter;
