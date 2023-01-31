const {Vehicule} = require('../dbLocal/sequelize')
const auth = require('../auth/auth')
  
module.exports = (app) => {
  app.delete('/api/vehicules/:id', auth, (req, res) => {
    Vehicule.findByPk(req.params.id).then(vehicule => {
      if(vehicule===null){
        const message = 'impossible de retrouver la page demandée !'
        return res.status(404).json({message})
    }
      const vehiculeDeleted = vehicule;
      return Vehicule.destroy({
        where: { id: vehicule.id }
      })
      .then(_ => {
        const message = `La voiture avec l'identifiant n°${vehiculeDeleted.id} a bien été supprimé.`
        res.json({message, data: vehiculeDeleted })
      })
    })
    .catch(error =>{
      const message = 'impossible de supprimer le véhicule'
      res.status(500).json({message, data:error})
  })
  })
}