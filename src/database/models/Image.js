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
      product_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    let config = {
      tableName: "images",
      timestamps: false,
    };
    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models) {
        Image.belongsTo(models.Product, {
        as: "products",
        foreignKey: "product_id",
        });
      };

    return Image;
  };