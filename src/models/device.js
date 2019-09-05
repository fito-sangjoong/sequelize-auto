/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('device', {
		idf_device: {
			type: DataTypes.STRING(25),
			allowNull: false,
			primaryKey: true
		},
		mfd: {
			type: DataTypes.DATEONLY,
			allowNull: false
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
		tableName: 'device'
	});
};
