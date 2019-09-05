/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app__team_member', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		team_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('coach','player'),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(191),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		birth: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		nation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		gender: {
			type: DataTypes.ENUM('M','F'),
			allowNull: false
		},
		height: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		weight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		uniform_number: {
			type: DataTypes.CHAR(2),
			allowNull: false
		},
		position: {
			type: DataTypes.ENUM('FW','MF','DF','GK'),
			allowNull: false
		},
		foot: {
			type: DataTypes.ENUM('Left','Right','All'),
			allowNull: false
		},
		memo_admin: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		use_check: {
			type: DataTypes.ENUM('yes','no'),
			allowNull: false,
			defaultValue: 'yes'
		},
		insert_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		insert_user: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		update_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_user: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		delete_check: {
			type: DataTypes.ENUM('yes','no'),
			allowNull: false,
			defaultValue: 'no'
		},
		delete_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		delete_user: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'app__team_member'
	});
};
