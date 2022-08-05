module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      category: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    };
    let config = {
      tableName: "categories",
      timestamps: false,
    };
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models) {
        Category.hasMany(models.Product, { 
            as: "Product", 
            foreignKey: "category_id"
        })
    };
    return Category;
  };