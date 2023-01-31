const validTypes = ['voiture', 'utilitaire', 'camion', 'moto', 'scooter', 'mobylette']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Vehicule', {
      id: {
        type: DataTypes.DOUBLE,
        primaryKey: true,
        autoIncrement: true
      },
      marque: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{msg:'la marque ne peux pas être vide'},
          notNull:{msg:'la marque est une propriété requise'}
        }
      },
      modele: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{msg:'le modele ne peux pas être vide'},
          notNull:{msg:'le modele est une propriété requise'}
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        /* validate:{
          isUrl:{msg:'Utiliser uniquement Url valide pour l\'image'},
          notNull:{msg:'l\'image est une propriété requise'}
        } */
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{msg:'le type de peux pas être vide'},
          notNull:{msg:'le type est une propriété requise'},
          isTypesValid(value){
              if(!validTypes.includes(value)){
                throw new Error(`le type de la voiture doit appartenir à la liste suivante : ${validTypes}`)
              }
            }
          }
        },
        energie: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty:{msg:'le type d\'énergie ne peux pas être vide'},
              notNull:{msg:'la propriété est requise'}
            }
          },
        immatriculation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{msg:'l\'immatriculation ne peux pas être vide'},
            notNull:{msg:'la propriété est requise'}
        }
        },
        transmission: {
            type: DataTypes.STRING,
            allowNull: false
        },
        couleur: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numeromoteur: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'le numéro moteur ne peux pas être vide'},
                notNull:{msg:'la propriété est requise'}
            }
        },
        numerochassis: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'le numéro chassis ne peux pas être vide'},
                notNull:{msg:'la propriété est requise'}
            }
        },
        datecirculation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'la date de mise en circulation ne peux pas être vide'},
                notNull:{msg:'la propriété est requise'}
            }
        },
        silhouette: {
            type: DataTypes.STRING,
            allowNull: false
            },
        puissancedin:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la puissance ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la puissance doit être supérieur ou égale à 0'
          },
          max:{
            args:[2000],
            msg:'la puissance doit être inférieur ou égale à 2000'
          },
          notNull:{msg:'la propriété est requise'}
        }
      },
      puissancefisc:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la puissance ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la puissance doit être supérieur ou égale à 0'
          },
          max:{
            args:[40],
            msg:'la puissance doit être inférieur ou égale à 40'
          },
          notNull:{msg:'la propriété est requise'}
        }
      },
      kilometrage:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le kilométrage ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le kilométrage doit être supérieur ou égale à 0'
          },
          notNull:{msg:'la propriété est requise'}
        }
      },
      boitedevitesse:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la boite de vitesse ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la boite de vitesse doit être supérieur ou égale à 0'
          },
          max:{
            args:[6],
            msg:'la boite de vitesse doit être inférieur ou égale à 6'
          },
          notNull:{msg:'la propriété est requise'}
        }
      },
      typeboitevitesse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty:{msg:'le type de boite de vitesse ne peux pas être vide'},
            notNull:{msg:'la propriété est requise'}
        }
        },
      critair:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le crit\'air ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le crit\'air doit être supérieur ou égale à 0'
          },
          max:{
            args:[5],
            msg:'le crit\'air doit être inférieur ou égale à 5'
          },
          notNull:{msg:'la propriété est requise'}
        }
      },
      nombredeportes:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le nombre de portes ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le nombre de portes doit être supérieur ou égale à 0'
          },
          max:{
            args:[100],
            msg:'le nombre de portes doit être inférieur ou égale à 100'
          }
        }
      },
      nombredeplaces:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le nombre de places ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le nombre de places doit être supérieur ou égale à 0'
          },
          max:{
            args:[5],
            msg:'le nombre de places doit être inférieur ou égale à 5'
          }          
        }
      },
      prixachat:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le prix d\'achat ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le prix d\'achat doit être supérieur ou égale à 0'
          }               
        }
      },
      nombredecylindres:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'le nombre de cylindres ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'le nombre de cylindres doit être supérieur ou égale à 0'
          },
          max:{
            args:[24],
            msg:'le nombre de cylindres doit être inférieur ou égale à 24'
          }          
        }
      },
      cylindree:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la cylindrée ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la cylindrée doit être supérieur ou égale à 0'
          },
          max:{
            args:[8000],
            msg:'la cylindrée doit être inférieur ou égale à 8000'
          }          
        }
      },
      reservoir:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la taille du réservoir ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la taille du réservoir doit être supérieur ou égale à 0'
          }       
        }
      },
      consommationroute:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la consommation route ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la consommation route doit être supérieur ou égale à 0'
          }       
        }
      },
      consommationmixte:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la consommation mixte ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la consommation mixte doit être supérieur ou égale à 0'
          }       
        }
      },
      consommationurbaine:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la consommation urbaine ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la consommation urbaine doit être supérieur ou égale à 0'
          }       
        }
      },
      longueurvehicule:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la longueur du véhicule ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la longueur du véhicule doit être supérieur ou égale à 0'
          }       
        }
      },
      largeurvehicule:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la largeur du véhicule ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la largeur du véhicule doit être supérieur ou égale à 0'
          }       
        }
      },
      hauteurvehicule:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
          isNumeric:{msg:'la hauteur du véhicule ne peut être que des chiffres'},
          min:{
            args:[0],
            msg:'la hauteur du véhicule doit être supérieur ou égale à 0'
          }       
        }
      },





      },
      
    {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }