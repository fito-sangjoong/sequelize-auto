/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('device_rental', {
		idf_device_rental: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idf_device: {
			type: DataTypes.STRING(25),
			allowNull: false,
			references: {
				model: 'device',
				key: 'idf_device'
			}
		},
		idf_rental: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			references: {
				model: 'rental',
				key: 'idf_rental'
			}
		},
		date_deliver: {
			type: DataTypes.DATE,
			allowNull: false
		},
		date_return: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_updated: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'device_rental'
	});
};
