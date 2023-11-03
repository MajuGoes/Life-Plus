const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('lifeMais', 'root', 'aula', {
    host: 'localhost',
    dialect: 'mysql',
});

const TbSugestao = sequelize.define("tbsugestao", {
    idsugestao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sugestoes: {
        type: DataTypes.STRING(500)
    },
}, {timestamps: false});

TbSugestao.sync().then(() => {
    console.log("Tarefa sincronizada com sucesso!");
})

module.exports = TbSugestao;