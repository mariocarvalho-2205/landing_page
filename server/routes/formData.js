// routes/formData.js
const express = require('express');
const FormData = require('../models/FormData');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
