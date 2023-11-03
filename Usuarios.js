const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('lifeMais', 'root', 'aula', {
    host: 'localhost',
    dialect: 'mysql',
});

const TbCliente = sequelize.define("tbclientes", {
    idcli: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomecli: {
        type: DataTypes.STRING(100)
    },
    emailcli: {
        type: DataTypes.STRING(100)
    },
    senhacli: {
        type: DataTypes.STRING(100)
    },
    dtcadcli: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    }
}, {timestamps: false});

TbCliente.sync().then(() => {
    console.log("Tarefa sincronizada com sucesso!");
})

module.exports = TbCliente;