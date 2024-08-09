const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  creationAt: { type: Date, required: true,
    default:Date.now()
   },
  updatedAt: { type: Date, required: true, default:Date.now() }
});

export const CategoryModel=mongoose.models.categories || mongoose.model("categories",categorySchema)
