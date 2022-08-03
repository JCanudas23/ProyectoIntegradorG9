module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    };
    let config = {
      tableName: "images",
      timestamps: false,
    };
    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models) {
        Image.belongsToMany(models.Product, {
        as: "Product_Image",
        through: "product_image",
        foreignKey: "image_id",
        otherKey: "product_id",
        timestamps: false,
        });
      };

    return Image;
  };