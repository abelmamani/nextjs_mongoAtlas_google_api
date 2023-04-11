import Colectivo from "@/models/Colectivo"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request, {params}) {
    try{
        const colectivo = await Colectivo.findById(params.id)
        
        if(!colectivo)
            return new Response(JSON.stringify({msg: "Colectivo no encontrada"}))
        return new Response(JSON.stringify(colectivo))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}

export async function PUT(request, {params}) {
    try{
        const colectivo = await request.json()
        const colectivoActualizado = await Colectivo.findByIdAndUpdate(params.id, colectivo, {new: true})

        if(!colectivoActualizado)
            return new Response(JSON.stringify({msg: "Colectivo no encontrada"}))
        return new Response(JSON.stringify(colectivoActualizado))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}


export async function DELETE(request, {params}) {
    try{
        const colectivoEliminado = await Colectivo.findByIdAndDelete(params.id)
        
        if(!colectivoEliminado)
            return new Response(JSON.stringify({msg: "Colectivo no encontrada"}))
        return new Response(JSON.stringify(colectivoEliminado))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}