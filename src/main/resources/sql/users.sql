INSERT INTO users (id, age, username, surname, password)
VALUES (1, 12, 'Ivan', 'Ivanov', '{noop}123'),
       (2, 20, 'Petr', 'Petrov', '{noop}123'),
       (3, 30, 'Sveta', 'Svetikova', '{noop}123'),
       (4, 13, 'Vlad', 'Vladikov', '{noop}123'),
       (5, 35, 'Kate', 'Smith', '{noop}123');

INSERT INTO `roles` (`id`, `role`)
VALUES
       (1,'ADMIN'),
       (2,'USER');

INSERT INTO users_roles (user_id, role_id) values (1,1), (1,2);
INSERT INTO users_roles (user_id, role_id) values (2,1);
INSERT INTO users_roles (user_id, role_id) values (3,2);

