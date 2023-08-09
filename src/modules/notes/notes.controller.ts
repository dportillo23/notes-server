import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { v4 as uuidv4 } from 'uuid'
import { CreateNote, Note } from './interfaces/notes.interface'

const fakeDB: Note[] = [
  {
    id: uuidv4(),
    title: 'New note',
    note: 'This is a new note',
    author: 'Daniel',
    category: 'Studies',
    created: new Date().toISOString().split('T')[0],
    updated: new Date().toISOString().split('T')[0],
  }
]

const addNewNote = async (newNote: CreateNote): Promise<Note> => {
  const noteToAdd = {
    id: uuidv4(),
    ...newNote,
    created: new Date().toISOString().split('T')[0],
    updated: new Date().toISOString().split('T')[0],
  }
  return noteToAdd
}

export class NotesController {
  addNote = async (req: Request<{}, {}, CreateNote>, res: Response) => {
    try {
      const newNote = await addNewNote(req.body)
      fakeDB.push(newNote)
      res.status(httpStatus.CREATED).send(newNote)
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    }
  }

  getNotes = async (_req: Request, res: Response) => {
    try {
      res.status(httpStatus.OK).send(fakeDB)
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    }
  }
};
