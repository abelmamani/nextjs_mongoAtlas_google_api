import { Schema, model, models } from "mongoose";

export const LineaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        trim: true,
        maxlength: [45, "Name must be less then 45 characters"]
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200, "The description must be less the 200 characters"]
    }
}, {timestamps: true, versionKey: false})

export default models.Linea || model("Linea",LineaSchema)