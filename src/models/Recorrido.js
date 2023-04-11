import { Schema, model, models } from "mongoose";
import { LineaSchema } from "./Linea";
import { ColectivoSchema } from "./Colectivo";
import { ParadaSchema } from "./Parada";

export const RecorridoSchema = new Schema({
    linea: {
        type: LineaSchema,
    required: true},
    colectivo: {
        type: ColectivoSchema,
        required: true
    }, 
    paradas: [{
        parada: {
            type: ParadaSchema,
            required:true
        },
        hora: {
            type: String,
            required: true,
            maxlength: 45,
            trim: true
        }
    }
    ]
}, {timestamps: true, versionKey: false})

export default models.Recorrido || model("Recorrido", RecorridoSchema)