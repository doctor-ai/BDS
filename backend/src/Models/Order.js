const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      require: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    patientName: {
      type: mongoose.Schema.Types.String,
      default: 'Patient',
    },
    cabId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cab'
    },
    isCompleted: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
  },
  SchemaOptions
);

orderSchema.index({ sparse: true }, { background: true });

module.exports = mongoose.model('Orders', orderSchema);