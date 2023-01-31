const {Vehicule} = require('../dbLocal/sequelize')
const { ValidationError } = require('sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.put('/api/vehicules/:id', auth, (req, res) => {
    const id = req.params.id
    Vehicule.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Vehicule.findByPk(id).then(vehicule => {
        if(vehicule===null){
            const message = 'impossible de retrouver la page demandée !'
            res.status(404).json({message})
        }
        const message = `La voiture ${vehicule.marque} a bien été modifiée.`
        res.json({message, data: vehicule })
      })
    })
    .catch(error =>{
        if(error instanceof ValidationError){
            return res.status(404).json({message:error.message, data: error})
        }
        const message = 'modification du véhicule impossible'
        res.status(500).json({message, data:error})
    })
})
}