import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"Luanfemsa26&",
      database: "tabela_de_filamentos"
}
)

app.use(express.json())
app.use(cors())

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

app.post("/filamentos",(req, res)=>{
      const q = "INSERT INTO filamentos (`titulo_filamento`, `descricao`, `cor`) VALUES (?)"
      const values = [
            req.body.titulo_filamento,
            req.body.descricao,
            req.body.cor,
      ]

      db.query(q,[values], (err,data)=>{
            if(err) return res.json(err)
                  return res.json("Filamento adicionado com sucesso")
      })
})
      

app.listen(8800, ()=>{
      console.log("Conectado ao backend!!!!")
})