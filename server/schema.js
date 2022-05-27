import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const default0 = {
  type: Number,
  default: 0,
}

const coordinate = [Number];

const books = new Schema({
  name: String,
  country: String,
  countryCode: String,
  region: String,
  coord: [Number],
  population: default0,
  distance: default0
});

export default model('bookstore', books);