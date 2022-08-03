module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      role_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },      
    };
    let config = {
      tableName: "users",
      timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "Role",
            foreignKey: "role_id",
          });
    }

    return User;
  };