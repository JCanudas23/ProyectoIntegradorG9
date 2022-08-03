module.exports = (sequelize, dataTypes) => {
    let alias = "Size";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      size: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
    };
    let config = {
      tableName: "sizes",
      timestamps: false,
    };
    const Size = sequelize.define(alias, cols, config);
    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
          as: "Product_Size",
          through: "product_size",
          foreignKey: "size_id",
          otherKey: "product_id",
          timestamps: false,
        });
    }

    return Size;
  };