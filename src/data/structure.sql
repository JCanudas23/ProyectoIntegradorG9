SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Lacez
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Lacez` DEFAULT CHARACTER SET utf8 ;
USE `Lacez` ;

-- -----------------------------------------------------
-- Table `Lacez`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lacez`.`categories` ;

CREATE TABLE IF NOT EXISTS `Lacez`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lacez`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lacez`.`products` ;

CREATE TABLE IF NOT EXISTS `Lacez`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `size` INT NOT NULL,
  `colors` INT NOT NULL,
  `stock` INT NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `delete` TINYINT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categories_id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC),
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `Lacez`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lacez`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lacez`.`roles` ;

CREATE TABLE IF NOT EXISTS `Lacez`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `role_UNIQUE` (`role` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Lacez`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Lacez`.`users` ;

CREATE TABLE IF NOT EXISTS `Lacez`.`users` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `zip_code` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NULL,
  `delete` TINYINT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`id`, `roles_id`),
  INDEX `fk_users_roles_idx` (`roles_id` ASC),
  CONSTRAINT `fk_users_roles`
    FOREIGN KEY (`roles_id`)
    REFERENCES `Lacez`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
