module.exports = (sequelize, dataTypes) => {
    let alias = "Product_Image";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      image_id: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
    };
    let config = {
      tableName: "product_image",
      timestamps: false,
    };
    const Product_Image = sequelize.define(alias, cols, config);

    return Product_Image;
  };