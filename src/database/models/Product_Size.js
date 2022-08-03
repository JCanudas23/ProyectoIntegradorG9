module.exports = (sequelize, dataTypes) => {
    let alias = "Product_Size";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      size_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    let config = {
      tableName: "product_size",
      timestamps: false,
    };
    const Product_Size = sequelize.define(alias, cols, config);

    return Product_Size;
  };