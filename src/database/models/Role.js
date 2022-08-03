module.exports = (sequelize, dataTypes) => {
    let alias = "Role";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      role: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    };
    let config = {
      tableName: "roles",
      timestamps: false,
    };
    const Role = sequelize.define(alias, cols, config);
    Role.associate = function(models) {
        Role.hasMany(models.User, { 
            as: "User", 
            foreignKey: "role_id"
        })
    };
    return Role;
  };