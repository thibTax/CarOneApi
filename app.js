const express = require('express')
const sequelize = require('./src/dbLocal/sequelize')
const bodyParser = require ('body-parser')
const cors = require ('cors')

// déclarer le projet express
const app = express()
const port = process.env.PORT || 3002

//midleware
app
    .use(bodyParser.json())
    .use(cors())

//initialiser la bdd avec sequelize
sequelize.initDb()

// endpoint for CRUD to complet
require('./src/routes/findAllVehicules')(app)
require('./src/routes/findVehiculeByPk')(app)
require('./src/routes/createVehicule')(app)
require('./src/routes/updateVehicule')(app)
require('./src/routes/deleteVehiculeByPk')(app)
require('./src/routes/login')(app)

// gestion d'erreurs 404
app.use(({res})=>{
    const message = 'Impossible de retrouver la page demandée !'
    res.status(404).json({message})
})

app.listen(port,()=> console.log(`App node demarée sur le port : ${port}`))