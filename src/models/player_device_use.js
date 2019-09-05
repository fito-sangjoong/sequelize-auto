/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('player_device_use', {
		idf_player_device_use: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idf_player: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			references: {
				model: 'app__team_member',
				key: 'id'
			}
		},
		idf_device: {
			type: DataTypes.STRING(25),
			allowNull: false,
			references: {
				model: 'device',
				key: 'idf_device'
			}
		},
		idf_device_rental: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			references: {
				model: 'device_rental',
				key: 'idf_device_rental'
			}
		},
		date_start: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		date_finish: {
			type: DataTypes.DATEONLY,
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
		tableName: 'player_device_use'
	});
};
