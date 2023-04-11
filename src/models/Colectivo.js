import { Schema, model, models } from "mongoose";

export const ColectivoSchema = new Schema({
    numero: {
        type: Number,
        required: [true, "Number is required"],
        unique: true,
    },
    matricula: {
        type: String,
        required: true,
        trim: true,
        maxlength: [45, "The matricula must be less the 200 characters"]
    },
    marca: {
        type: String,
        required: true,
        trim: true,
        maxlength: [45, "The marca must be less the 200 characters"]
    },
    capacidad: {
        type: Number,
        required: true
    },
}, {timestamps: true, versionKey: false})

export default models.Colectivo || model("Colectivo", ColectivoSchema)