import Parada from "../../../models/Parada"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request) {
    try{
        const paradas = await Parada.find()
        return new Response(JSON.stringify(paradas))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
   

}



export async function POST(request) {
    try{
        const parada = await request.json()
        const paradaNueva = new Parada(parada)
        const paradaGuardada = await paradaNueva.save()
        return new Response(JSON.stringify(paradaGuardada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }

}