// models/FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  subject: { type: String, required: true },
  something: { type: String, required: true },
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
