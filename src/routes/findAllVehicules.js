const {Vehicule} = require('../dbLocal/sequelize')
const {Op} =require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.get('/api/vehicules', auth, (req,res) => {
        if(req.query.marque){
            const marque = req.query.marque
            return Vehicule.findAndCountAll({where:{marque:{
                [Op.like]: `%${marque}%`}}})
            .then(count, rows =>{
                const message = `Il y a ${count} voiture qui correspondent à la recherche`
                res.json({message,data:rows})
            })
        }
        Vehicule.findAll()
        .then(vehicules =>{
            const message = 'la liste des vehicules est bien récupérée'
            res.json({message,data:vehicules})
        })
        .catch(error =>{
            const message = 'récupération du véhicule impossible'
            res.status(500).json({message, data:error})
        })
    })
}