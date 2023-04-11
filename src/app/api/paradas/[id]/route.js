
import Parada from "@/models/Parada"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request, {params}) {
    try{
        const parada = await Parada.findById(params.id)
        
        if(!parada)
            return new Response(JSON.stringify({msg: "Parada no encontrada"}))
        return new Response(JSON.stringify(parada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}

export async function PUT(request, {params}) {
    try{
        const parada = await request.json()
        const paradaActualizada = await Parada.findByIdAndUpdate(params.id, parada, {new: true})

        if(!paradaActualizada)
            return new Response(JSON.stringify({msg: "Parada no encontrada"}))
        return new Response(JSON.stringify(paradaActualizada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}


export async function DELETE(request, {params}) {
    try{
        const paradaEliminada = await Parada.findByIdAndDelete(params.id)
        
        if(!paradaEliminada)
            return new Response(JSON.stringify({msg: "Parada no encontrada"}))
        return new Response(JSON.stringify(paradaEliminada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}