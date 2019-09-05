/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('test_user', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LOGIN_ID: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		PASSWORD: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		NAME: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		AGE: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		EMAIL: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		USE_YN: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: 'Y'
		},
		DATE_CREATE: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		DATE_UPDATE: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'test_user'
	});
};
