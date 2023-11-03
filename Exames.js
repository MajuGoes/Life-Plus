const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('lifeMais', 'root', 'aula', {
    host: 'localhost',
    dialect: 'mysql',
});

const TbExames = sequelize.define("tbexames", {
    idexame: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    motivoexame: {
        type: DataTypes.STRING(100)
    },
    dataexame: {
        type: DataTypes.DATE,
    },
    horaexame: {
        type: DataTypes.TIME,
    },
    
}, {timestamps: false});

TbExames.sync().then(() => {
    console.log("Lembrete ativado com sucesso");
})

module.exports = TbExames;