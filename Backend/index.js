import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"*****",
      database: "tabela_de_filamentos"
}
)

app.get("/", (req, res)=>{
      res.json("Isso é o backend!!!!!")
})

app.get("/filamentos", (req, res)=>{
      const q = "SELECT * FROM filamentos"
      db.query(q,(err, data)=>{
            if(err) return res.json(err)
                  return res.json(data)
      })
})
      

app.listen(8800, ()=>{
      console.log("Conectado ao backend!!!!")
})