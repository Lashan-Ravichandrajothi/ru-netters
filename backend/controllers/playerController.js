const Player = require('../models/playerModel')
const mongoose = require('mongoose')

const getPlayers = async (req, res) => {
    const players = await Player.find({}).sort({createdAt: -1})
    res.status(200).json(players)
}

const getPlayer = async (req, res) => {
    const {id} =  req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const player = await Player.findById(id)

    if (!player) {
        return res.status(404).json({error: 'No such Player'})
    }

    res.status(200).json(player)
}

const createPlayer = async (req, res) => {
    const { name, age, contactNo } = req.body

    try {
      const player = await Player.create({ name, age, contactNo })
      res.status(201).json(player) 
    } catch (error) {
      console.error(error) 
      res.status(500).json({ error: 'Internal server error' }) 
    }   
}

const deletePlayer = async (req, res) => {
    const {id} =  req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }    

    const player = await Player.findOneAndDelete({_id: id})

    if (!player) {
        return res.status(404).json({error: 'No such Player'})
    }

    res.status(200).json(player)
}

module.exports = {
    createPlayer,
    getPlayer,
    getPlayers,
    deletePlayer
}