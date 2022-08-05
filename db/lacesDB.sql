CREATE DATABASE IF NOT EXISTS `lacezdb`;
USE `lacezdb`;

CREATE TABLE `Users`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `deleted` TINYINT NOT NULL,
    `role_id` INT NOT NULL
);
CREATE TABLE `roles`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` VARCHAR(255) NOT NULL
);
CREATE TABLE `images`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `image` VARCHAR(255) NOT NULL,
    `product_id` INT NOT NULL
);
CREATE TABLE `sizes`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `size` INT NOT NULL
);
CREATE TABLE `product_size`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` INT NOT NULL,
    `size_id` INT NOT NULL
);
CREATE TABLE `products`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `price` INT NOT NULL,
    `stock` INT NOT NULL,
    `deleted` TINYINT NOT NULL,
    `category_id` INT NOT NULL
);
CREATE TABLE `categories`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Users` ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY(`role_id`) REFERENCES `roles`(`id`);
ALTER TABLE
    `images` ADD CONSTRAINT `images_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `product_size` ADD CONSTRAINT `product_size_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`);
ALTER TABLE
    `product_size` ADD CONSTRAINT `product_size_size_id_foreign` FOREIGN KEY(`size_id`) REFERENCES `sizes`(`id`);
ALTER TABLE
    `products` ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);