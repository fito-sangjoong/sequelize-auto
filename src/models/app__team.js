/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app__team', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		team_group_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('normal','contest'),
			allowNull: false,
			defaultValue: 'normal'
		},
		gender: {
			type: DataTypes.ENUM('M','F'),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(191),
			allowNull: false
		},
		short_name: {
			type: DataTypes.STRING(191),
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(191),
			allowNull: true
		},
		intensity_level1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		intensity_level2: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		intensity_level3: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		intensity_level4: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		sprint_speed: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		sprint_time: {
			type: DataTypes.DECIMAL,
			allowNull: true
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
		tableName: 'app__team'
	});
};
