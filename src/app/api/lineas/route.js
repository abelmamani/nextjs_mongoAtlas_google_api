import Linea from "@/models/Linea"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request) {
    try{
        const lineas = await Linea.find()
        return new Response(JSON.stringify(lineas))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
   

}



export async function POST(request) {
    try{
        const linea = await request.json()
        const lineaNueva = new Linea(linea)
        const lineaGuardada = await lineaNueva.save()
        return new Response(JSON.stringify(lineaGuardada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }

}