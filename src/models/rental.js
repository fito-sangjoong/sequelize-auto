/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rental', {
		idf_rental: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		idf_team: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			references: {
				model: 'app__team',
				key: 'id'
			}
		},
		date_start: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		date_finish: {
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
		tableName: 'rental'
	});
};
