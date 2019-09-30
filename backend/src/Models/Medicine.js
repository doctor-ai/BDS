const mongoose = require('mongoose');
const { SchemaOptions } = require('models');

const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
  medicineName: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  description: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  pricing: {
    type: mongoose.Schema.Types.Number,
    require: true,
  },
  manufacturer: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  benifits: {
    type: mongoose.Schema.Types.String
  },
  usage: {
    type: mongoose.Schema.Types.String,
    require: true,
  },
  precautions: {
    type: mongoose.Schema.Types.String,
  },
  productImage: {
    type: mongoose.Schema.Types.String
  },
  otherInfo: {
    type: mongoose.Schema.Types.String,
  },
},
  SchemaOptions
);


MedicineSchema.index({ medicineName: 1, description: 'text', sparse: true }, { background: true });

module.exports = mongoose.model('Medicine', MedicineSchema);
