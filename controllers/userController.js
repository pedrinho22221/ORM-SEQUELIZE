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

// Buscar usuário por ID
exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
};

// Atualizar usuário
exports.updateUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    await user.update(req.body);
    res.json(user);
};

// Deletar usuário
exports.deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    await user.destroy();
    res.json({ message: "Usuário deletado" });
};