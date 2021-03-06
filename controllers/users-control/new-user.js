const {
  validationResult
} = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user');

const createUser = async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({
      message: 'Invalid input.'
    });
  }

  const {
    name,
    carNumber,
    password,
    confirm_password,
    user_admin
  } = req.body

  let createdUser
  try {

    const users = await User.find().exec();
    const VALID = users.find(u => u.name === name);

    if (VALID || password !== confirm_password) // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
      return res.json({
        message: 'Name already used or the passwords do not match!'
      });

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 5) // criptarea parolei
    } catch (err) {
      res.status(500).json({
        error: "Could not create user."
      })
    }

    createdUser = new User({
      name,
      carNumber,
      password: hashedPassword,
      user_admin
    })

    await createdUser.save();

  } catch (err) {
    res.status(500).json("Registration has failed!")
  }

  let token;
  try {
    token = jwt.sign({ userID: createdUser.id, name: createdUser.name }, 'super_secret', { expiresIn: '1h' });
  } catch (err) {
    return res.status(500).json("Failed registration!")
  }
  res.status(201).json({
    message: 'New user added!',
    user: createdUser,
    token: token
  });
};

module.exports = createUser

