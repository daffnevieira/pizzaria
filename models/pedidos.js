import { Sequelize } from "sequelize";
import sequelize from "./db.js"

const user = sequelize.define("pedidos", {
	id : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	tamanho: {
		type: Sequelize.STRING,
		allowNull: true
	},
	saborSalgado: {
		type: Sequelize.STRING,
		allowNull: true
	},
	sobremesa: {
		type: Sequelize.STRING,
		allowNull: true
	},
	borda: {
		type: Sequelize.STRING,
		allowNull: true
	},
	bebidas: {
		type: Sequelize.STRING,
		allowNull: true
	},
	obs: {
		type: Sequelize.STRING,
		allowNull: true
	},
	pgto: {
		type: Sequelize.STRING,
		allowNull: true,
		validate: {
			notEmpty: {
				msg: "Esse campo não pode ser vazio"
			}
		}
	}
});


export default user;