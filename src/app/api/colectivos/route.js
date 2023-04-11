import Colectivo from "../../../models/Colectivo"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request) {
    try{
        const colectivos = await Colectivo.find()
        return new Response(JSON.stringify(colectivos))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
   

}



export async function POST(request) {
    try{
        const colectivo = await request.json()
        const colectivoNuevo = new Colectivo(colectivo)
        const colectivoGuardado = await colectivoNuevo.save()
        return new Response(JSON.stringify(colectivoGuardado))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }

}