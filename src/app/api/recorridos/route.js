import Recorrido from "@/models/Recorrido"
import Parada from "../../../models/Parada"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request) {
    try{
        const recorridos = await Recorrido.find()
        return new Response(JSON.stringify(recorridos))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
   

}



export async function POST(request) {
    try{
        const recorrido = await request.json()
        const recorridoNuevo = new Recorrido(recorrido)
        const recorridoGuardado = await recorridoNuevo.save()
        return new Response(JSON.stringify(recorridoGuardado))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }

}