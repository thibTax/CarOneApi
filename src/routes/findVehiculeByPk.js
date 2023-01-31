const {Vehicule} = require('../dbLocal/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.get('/api/vehicules/:id', auth, (req,res) => {
        Vehicule.findByPk(req.params.id)
        .then(car =>{
            if(car===null){
                const message = 'impossible de retrouver la page demandée !'
                res.status(404).json({message})
            }
            const message = `le vehicule ${req.params.id} à bien été trouvée`
            res.json({message,data:car})
        })
        .catch(error =>{
            const message = 'récupération du véhicule impossible'
            res.status(500).json({message, data:error})
        })
    })
}