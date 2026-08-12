const User = require('../models/userModel')


//criar usuario
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

//Listar todos os usuários
exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

