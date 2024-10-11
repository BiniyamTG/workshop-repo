const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  manual: { type: String },  // Path to the manual PDF
  photo: { type: String },   // Path to the machine photo
  hospitals: [{ type: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Machine = mongoose.model('Machine', machineSchema);
module.exports = Machine;
