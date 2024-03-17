const express = require('express')
const {
  createPlayer,
  getPlayer,
  getPlayers,
  deletePlayer,
  updatePlayer
} = require('../controllers/playerController')

const router = express.Router()

router.get('/', getPlayers)

router.get('/:id', getPlayer)

router.post('/', createPlayer)

router.delete('/:id', deletePlayer)

router.patch('/:id', updatePlayer)

module.exports = router