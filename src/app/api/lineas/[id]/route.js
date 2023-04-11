
import Linea from "@/models/Linea"
import { dbConnet } from "@/utils/mongoose"

dbConnet()

export async function GET(request, {params}) {
    try{
        const linea = await Linea.findById(params.id)
        
        if(!linea)
            return new Response(JSON.stringify({msg: "Linea no encontrada"}))
        return new Response(JSON.stringify(linea))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}

export async function PUT(request, {params}) {
    try{
        const linea = await request.json()
        const lineaActualizada = await Linea.findByIdAndUpdate(params.id, linea, {new: true})

        if(!lineaActualizada)
            return new Response(JSON.stringify({msg: "Linea no encontrada"}))
        return new Response(JSON.stringify(lineaActualizada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}


export async function DELETE(request, {params}) {
    try{
        const lineaEliminada = await Linea.findByIdAndDelete(params.id)
        
        if(!lineaEliminada)
            return new Response(JSON.stringify({msg: "Linea no encontrada"}))
        return new Response(JSON.stringify(lineaEliminada))
    }catch(error){
        return new Response(JSON.stringify({msg: error.message}))
    }
    
}