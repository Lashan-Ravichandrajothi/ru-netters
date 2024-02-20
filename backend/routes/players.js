const express = require('express')
const Player = require('../models/playerModel')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' }) 
})

router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single workout' }) 
})

router.post('/', async (req, res) => {
  const { name, age, contactNo } = req.body

  try {
    const player = await Player.create({ name, age, contactNo })
    res.status(201).json(player) 
  } catch (error) {
    console.error(error) 
    res.status(500).json({ error: 'Internal server error' }) 
  }
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout' }) 
})

module.exports = router