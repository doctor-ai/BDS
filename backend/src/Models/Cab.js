const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const CabSchema = new Schema(
  {
    driverName: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    vehicalNumber: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    vehicalName: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    driverImage: {
      type: mongoose.Schema.Types.String,
      require: true,
    },
    mobileNumber: {
      type: mongoose.Schema.Types.Number,
      require: true,
    },
    isBooked: {
      type: mongoose.Schema.Types.Boolean,
      require: true,
      default: false,
    },
    location: {
      type: {
        type: mongoose.Schema.Types.String,
      },
      coordinates: [mongoose.Schema.Types.Number]
    },
  },
  SchemaOptions
);

CabSchema.index({ location: '2dsphere' }, { background: true });
module.exports = mongoose.model('Cab', CabSchema);