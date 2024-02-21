const express = require('express')
const {
  createPlayer,
  getPlayer,
  getPlayers,
  deletePlayer
} = require('../controllers/playerController')

const router = express.Router()

router.get('/', getPlayers)

router.get('/:id', getPlayer)

router.post('/', createPlayer)

router.delete('/:id', deletePlayer)

module.exports = router