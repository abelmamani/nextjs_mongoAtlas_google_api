

import {connect, connection} from "mongoose"
const conn = {
    isConnected: false
}
export async function dbConnet(){

    if(conn.isConnected) return

    const db = await connect(process.env.MONGODB_URL)
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", ()=>{
    console.log("mongodb is connected")
})

connection.on("error", (er)=>{
    console.log("Hubo un error: " + er)
})

