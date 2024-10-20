import express from 'express'

// import { requireAuth } from '../../middlewares/requireAuth.middleware.js'
import { log } from '../../middlewares/logger.middleware.js'

import { getBoards, getBoardById, addBoard, updateBoard, removeBoard, addBoardMsg, removeBoardMsg } from './board.controller.js'
import { requireAuth } from '../../middlewares/requireAuth.middleware.js'

const router = express.Router()

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get('/', log, requireAuth, getBoards)
router.get('/:boardId', log, requireAuth, getBoardById)
router.post('/', log, requireAuth, addBoard)
router.put('/:boardId', requireAuth, updateBoard)
// router.delete('/:id', requireAuth, removeBoard)
// router.delete('/:id', requireAuth, requireAdmin, removeBoard)

// router.post('/:id/msg', requireAuth, addBoardMsg)
// router.delete('/:id/msg/:msgId', requireAuth, removeBoardMsg)

export const boardRoutes = router