---- Erase everything ----

-- products --
DELETE FROM lacezdb.products;
ALTER TABLE lacezdb.products AUTO_INCREMENT=1;

-- users --
DELETE FROM lacezdb.users;
ALTER TABLE lacezdb.users AUTO_INCREMENT=1;

-- sizes --
DELETE FROM lacezdb.sizes;
ALTER TABLE lacezdb.sizes AUTO_INCREMENT=1;

-- categories --
DELETE FROM lacezdb.categories;
ALTER TABLE lacezdb.categories AUTO_INCREMENT=1;

-- roles --
DELETE FROM lacezdb.roles;
ALTER TABLE lacezdb.roles AUTO_INCREMENT=1;

-- product_size --
DELETE FROM lacezdb.product_size;
ALTER TABLE lacezdb.product_size AUTO_INCREMENT=1;

-- images --
DELETE FROM lacezdb.images;
ALTER TABLE lacezdb.images AUTO_INCREMENT=1;

-- Populate everything --

-- categories --
INSERT INTO lacezdb.categories (id,category) VALUES
(1, "Nuevo"), (2, "Retro");

-- sizes --
INSERT INTO lacezdb.sizes (id,size) VALUES
(1, 8),(2, 9),(3, 10),(4, 11);

-- roles --
INSERT INTO lacezdb.roles (id,role) VALUES
(1, "Admin"), (2, "Cliente");

-- products --
INSERT INTO lacezdb.products (id,name,description,price,stock,deleted,category_id) VALUES
(1, "Nike Dunk Low Fossil Rose","El Nike Dunk Low Fossil Rose cuenta con una parte superior de gamuza premium gris Fossil con Swooshes de gamuza Rose y envolturas en el talón. Una etiqueta Nike tejida en la lengüeta y una suela Air blanca y rosa en contraste agregan el toque final.",120,2,0,1),
(2, "Jordan 1 Mid SE Coconut Milk Particle Grey","El Air Jordan 1 Mid Cream Grey luce una base de lona para su parte superior en el color crema titular, que se asoma por la puntera, el cuarto y el cuello. Los revestimientos de ante difuso juegan con las sombras, gris oscuro en la puntera, el guardabarros y el panel de los ojales y gris claro en la solapa del cuello y la suela.",130,2,0,2),
(3, "Jordan 1 Retro High Trophy Room Chicago","Jordan Brand y el minorista Trophy Room con sede en Orlando se unieron una vez más para crear uno de los lanzamientos más esperados de 2021, Jordan 1 High Trophy Room. El diseño rinde homenaje a la primera aparición All-Star de Michael Jordan en el Juego de Estrellas de la NBA de 1985 en Indianápolis, que coincidió con el lanzamiento del Air Jordan 1.",1100,4,0,2),
(4, "Air Max Big Window","Diseño en color block, paneles de malla, detalle del logo Swoosh característico, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, plantilla con logo, logo en el contrafuerte y suela Air Max.",230,3,0,1),
(5, "Nike Air Force 1 Low Off-White Black White","La fuerza está dentro de ti, ya que Nike usa la suya propia y lanza las Air Force 1 Low Off-White Black White. Este AF1 viene con una parte superior negra, Nike 'Swoosh' blanca, entresuela negra y suela negra.",1230,4,0,2),
(6, "AIR MAX 90 THE TEN","Con vistas a la nueva década, las Air Max 90 de Tinker Hatfield reflejaban el fenómeno del Air visible llevando el diseño de las zapatillas a un nivel máximo completamente nuevo. Venerado por corredores y amantes de las zapatillas, este icono de la cultura de las zapatillas ofrecía más amortiguación, flexibilidad y conexiones culturales. Además, encontró su lugar en la escena musical underground de Reino Unido.",150,2,0,1),
(7, "Nike The 10: Air Max 97 OG","Tenis Off-White x Nike The 10: Air Max 97 OG en goma de color rosa de Nike con lengüeta en la parte posterior, logo en relieve en la lengüeta, agujetas en la parte delantera, logo de la marca en la parte delantera y lateral, logo Nike y suela con almohadilla de aire.",3201,3,0,2),
(8, "Nike SB Dunk Low Travis Scott","Este Nike SB Dunk Low está compuesto por una parte superior de gamuza con capas de lona de cachemira y franela a cuadros. A medida que se desgastan las superposiciones de cachemira, se revela un estampado de elefante. El texto bordado alrededor del cuello, los cordones de cuerda y el logotipo de Cactus Jack de La Flame en las lengüetas hinchadas completan este diseño.",150,2,0,1);

-- images --
INSERT INTO lacezdb.images (id, image , product_id) VALUES
(1, "Dunk_Low_Fossil_Rose_1.jpg", 1), (2, "Dunk_Low_Fossil_Rose_2.jpg", 1), (3, "Dunk_Low_Fossil_Rose_3.jpg", 1), (4, "Dunk_Low_Fossil_Rose_4.jpg", 1),
(5, "Air_Jordan_1_Mid_SE_1.jpg", 2), (6, "Air_Jordan_1_Mid_SE_2.jpg", 2), (7, "Air_Jordan_1_Mid_SE_3.jpg", 2), (8, "Air_Jordan_1_Mid_SE_4.jpg", 2),
(9, "Air_Jordan_One_Retro_OG_1.jpg",3), (10, "Air_Jordan_One_Retro_OG_2.jpg",3), (11, "Air_Jordan_One_Retro_OG_3.jpg",3), (12, "Air_Jordan_One_Retro_OG_4.jpg",3),
(13, "Air_Max_Big_Window_1.jpg",4), (14, "Air_Max_Big_Window_2.jpg",4), (15, "Air_Max_Big_Window_3.jpg",4), (16, "Air_Max_Big_Window_4.jpg",4),
(17, "The_10_Air_Force_1_1.jpg",5), (18, "The_10_Air_Force_1_2.jpg",5), (19, "The_10_Air_Force_1_3.jpg",5), (20, "The_10_Air_Force_1_4.jpg",5),
(21, "The_10_Air_Max_90_1.jpg",6), (22, "The_10_Air_Max_90_2.jpg",6), (23, "The_10_Air_Max_90_3.jpg",6), (24, "The_10_Air_Max_90_4.jpg",6),
(25, "The_10_Air_Max_97_OG_1.jpg",7), (26, "The_10_Air_Max_97_OG_2.jpg",7), (27, "The_10_Air_Max_97_OG_3.jpg",7), (28, "The_10_Air_Max_97_OG_4.jpg",7),
(29, "Travis_Scott_SB_Dunk_Cactus_Jack_1.jpg",8), (30, "Travis_Scott_SB_Dunk_Cactus_Jack_2.jpg",8), (31, "Travis_Scott_SB_Dunk_Cactus_Jack_3.jpg",8), (32, "Travis_Scott_SB_Dunk_Cactus_Jack_4.jpg",8);

-- users --
INSERT INTO lacezdb.users (id,name,user_name,email,password,avatar,deleted,role_id) VALUES
(1, "Micky Papa", "Mky Papa" ,"mkypapa.94@gmail.com", "$2a$10$gpCI04YCqKeB0MLIdUBknOwzKsjcQoXk5O/bSfqo14jDR8sOHlvpK", "micky_papa-7168.jpg", 0, 2),
(2, "Dennis Busenitz", "Busenitz81" ,"busenitz81@gmail.com", "$2a$10$bbj6DR7ujvyKrKAF17mBy.97pQ5x6FtYZVIjdWFz.oEa.gdOmO6tq", "user-1662400426264.jpg", 0, 2),
(3, "Mr.Lacez", "Mr. Lacez" ,"admin_lacez@gmail.com", "$2a$10$jWmmxWdcCukqfF1wX5ZvLe2lnNZkxe967C3DnwtRstPql/BxdVlgi", "logo.png", 0, 1);

-- product_size --
INSERT INTO lacezdb.product_size (id,product_id,size_id) VALUES
(1, 1, 1),(2, 1, 3),
(3, 2, 2),(4, 2, 4),
(5, 3, 1),(6, 3, 2),(7, 3, 3),(8, 3, 4),
(9, 4, 2),(10, 4, 3),(11, 4, 4),
(12, 5, 1),(13, 5, 2),(14, 5, 3),(15, 5, 4),
(16, 6, 1),(17, 6, 2),
(18, 7, 1),(19, 7, 2),(20, 7, 3),
(21, 8, 1),(22, 8, 2);