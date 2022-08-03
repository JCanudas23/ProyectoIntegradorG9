module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
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
      description: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      deleted: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      category_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    };
    let config = {
      tableName: "products",
      timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
      Product.belongsTo(models.Category, {
        as: "Category",
        foreignKey: "category_id",
      });
      Product.belongsToMany(models.Image, {
        as: "Product_Image",
        through: "product_image",
        foreignKey: "product_id",
        otherKey: "image_id",
        timestamps: false,
      });
      Product.belongsToMany(models.Size, {
        as: "Product_Size",
        through: "product_size",
        foreignKey: "product_id",
        otherKey: "size_id",
        timestamps: false,
      });
    };
  
    return Product;
  };