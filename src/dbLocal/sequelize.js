const {Sequelize, DataTypes} = require('sequelize')
const VehiculeModel =require('../models/vehicules')
const UserModel = require('../models/users')
const vehicules = require('../dbLocal/vehicules')
const bcrypt = require ('bcryptjs')

//Instance of sequelize
const sequelize = new Sequelize(
    'vehiculedb',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions :{
            timezone: 'Etc/GMT-2'
        },
        loggin :false 
    }
)

// auth sequelize 
sequelize.authenticate()
    .then(_=> console.log('database is auth'))
    .catch(error => console.log(`la bdd n'est pas établie : ${error}`))

// create the model of table
const Vehicule = VehiculeModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

// synch sequelize avec xamp
const initDb = () =>{
    return sequelize.sync({force:true}).then(_  => {
    
    vehicules.map(vehicule=>{
        Vehicule.create({
            marque:vehicule.marque,
            modele:vehicule.modele,
            image:vehicule.image,
            types:vehicule.types,
            energie:vehicule.energie,
            immatriculation: vehicule.immatriculation,
            transmission:vehicule.transmission,
            couleur:vehicule.couleur,
            numeromoteur:vehicule.numeromoteur,
            numerochassis:vehicule.numerochassis,
            datecirculation:vehicule.datecirculation,
            silhouette:vehicule.silhouette,
            puissancedin:vehicule.puissancedin,
            puissancefisc:vehicule.puissancefisc,
            kilometrage:vehicule.kilometrage,
            boitedevitesse:vehicule.boitedevitesse,
            typeboitevitesse:vehicule.typeboitevitesse,
            critair:vehicule.critair,
            nombredeportes:vehicule.nombredeportes,
            nombredeplaces:vehicule.nombredeplaces,
            prixachat:vehicule.prixachat,
            nombredecylindres:vehicule.nombredecylindres,
            cylindree:vehicule.cylindree,
            reservoir:vehicule.reservoir,
            consommationroute:vehicule.consommationroute,
            consommationmixte:vehicule.consommationmixte,
            consommationurbaine:vehicule.consommationurbaine,
            longueurvehicule:vehicule.longueurvehicule,
            largeurvehicule:vehicule.largeurvehicule,
            hauteurvehicule:vehicule.hauteurvehicule
        })
        .then(test => console.log(test.toJSON()))
    })
    bcrypt.hash('load', 10)
    .then(hash=> User.create({username:'load', password:hash}))
    .then(user=> console.log(user.toJSON()))
   
    console.log('la bdd est synchronisée')
})
}

module.exports={initDb, Vehicule, User}