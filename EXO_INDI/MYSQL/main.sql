CREATE DATABASE edusign;
CREATE TABLE users (
    id_user INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL
);

mysql> DESCRIBE edusign.users;
+-----------+------+------+-----+---------+----------------+
| Field     | Type | Null | Key | Default | Extra          |
+-----------+------+------+-----+---------+----------------+
| firstname | text | NO   |     | NULL    |                |
| lastname  | text | NO   |     | NULL    |                |
| email     | text | NO   |     | NULL    |                |
| id_user   | int  | NO   | PRI | NULL    | auto_increment |
+-----------+------+------+-----+---------+----------------+

CREATE TABLE edusigns (
    id_edusign INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INTEGER NOT NULL REFERENCES users(id_user),
    created_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

mysql> DESCRIBE edusign.edusigns;
+------------+-----------+------+-----+---------+-----------------------------+
| Field      | Type      | Null | Key | Default | Extra                       |
+------------+-----------+------+-----+---------+-----------------------------+
| id_user    | int       | NO   |     | NULL    |                             |
| created_at | timestamp | YES  |     | NULL    | on update CURRENT_TIMESTAMP |
| id_edusign | int       | NO   | PRI | NULL    | auto_increment              |
+------------+-----------+------+-----+---------+-----------------------------+

INSERT INTO users (firstname, lastname, email)
VALUES 'Ada', 'Lovelace', 'ada@test.fr';

INSERT INTO users (firstname, lastname, email)
VALUES 'Beatrice', 'Worsley', 'bea@test.fr';

INSERT INTO users (firstname, lastname, email)
VALUES 'Bella', 'Guerin', 'bella@test.fr';

INSERT INTO users (firstname, lastname, email)
VALUES 'Barbara', 'Chase', 'barbara@test.fr';

SELECT * FROM users;

mysql> SELECT * FROM users;
+-----------+----------+-----------------+---------+
| firstname | lastname | email           | id_user |
+-----------+----------+-----------------+---------+
| Ada       | Lovelace | ada@test.fr     |       1 |
| Beatrice  | Worsley  | bea@test.fr     |       2 |
| Bella     | Guerin   | bella@test.fr   |       3 |
| Barbara   | Chase    | barbara@test.fr |       4 |
+-----------+----------+-----------------+---------+

SELECT * FROM users WHERE firstname = 'Ada';

mysql> SELECT * FROM users WHERE firstname = 'Ada';
+-----------+----------+-------------+---------+
| firstname | lastname | email       | id_user |
+-----------+----------+-------------+---------+
| Ada       | Lovelace | ada@test.fr |       1 |
+-----------+----------+-------------+---------+

SELECT * FROM users WHERE firstname LIKE 'B%';

mysql> SELECT * FROM users WHERE firstname LIKE 'B%';
+-----------+----------+-----------------+---------+
| firstname | lastname | email           | id_user |
+-----------+----------+-----------------+---------+
| Beatrice  | Worsley  | bea@test.fr     |       2 |
| Bella     | Guerin   | bella@test.fr   |       3 |
| Barbara   | Chase    | barbara@test.fr |       4 |
+-----------+----------+-----------------+---------+

SELECT COUNT(*) FROM users;

mysql> SELECT COUNT(*) FROM users;
+----------+
| COUNT(*) |
+----------+
|        4 |
+----------+

SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';

mysql> SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';
+----------+
| COUNT(*) |
+----------+
|        3 |
+----------+

SELECT firstname FROM users;

mysql> SELECT firstname FROM users;
+-----------+
| firstname |
+-----------+
| Ada       |
| Beatrice  |
| Bella     |
| Barbara   |
+-----------+

INSERT INTO edusigns (id_user, created_at)
VALUES (1, NOW());

INSERT INTO edusigns (id_user, created_at)
VALUES (3, NOW());

INSERT INTO edusigns (id_user, created_at)
VALUES (1, NOW()),
(2, NOW()),
(3, NOW()),
(4, NOW());

mysql> SELECT * FROM edusigns;
+---------+---------------------+------------+
| id_user | created_at          | id_edusign |
+---------+---------------------+------------+
|       1 | 2025-03-31 12:07:46 |          1 |
|       3 | 2025-03-31 12:08:41 |          2 |
|       1 | 2025-03-31 12:17:11 |          4 |
|       2 | 2025-03-31 12:17:11 |          5 |
|       3 | 2025-03-31 12:17:11 |          6 |
|       4 | 2025-03-31 12:17:11 |          7 |
+---------+---------------------+------------+

SELECT * FROM edusigns ORDER BY created_at DESC, id_user;

mysql> SELECT * FROM edusigns ORDER BY created_at DESC, id_user;
+---------+---------------------+------------+
| id_user | created_at          | id_edusign |
+---------+---------------------+------------+
|       1 | 2025-03-31 12:17:11 |          4 |
|       2 | 2025-03-31 12:17:11 |          5 |
|       3 | 2025-03-31 12:17:11 |          6 |
|       4 | 2025-03-31 12:17:11 |          7 |
|       3 | 2025-03-31 12:08:41 |          2 |
|       1 | 2025-03-31 12:07:46 |          1 |
+---------+---------------------+------------+

SELECT * FROM edusigns WHERE created_at = "2025-03-31 12:07:46";

mysql> SELECT * FROM edusigns WHERE created_at = "2025-03-31 12:07:46";
+---------+---------------------+------------+
| id_user | created_at          | id_edusign |
+---------+---------------------+------------+
|       1 | 2025-03-31 12:07:46 |          1 |
+---------+---------------------+------------+

SELECT COUNT(*) FROM edusigns GROUP BY created_at;

mysql> SELECT COUNT(*) FROM edusigns GROUP BY created_at;
+----------+
| COUNT(*) |
+----------+
|        1 |
|        1 |
|        4 |
+----------+

-- Trouver la personne la plus présente
SELECT id_user, COUNT(*) AS present FROM edusigns GROUP BY id_user ORDER BY present DESC LIMIT 1;

mysql> SELECT id_user, COUNT(*) AS most_present FROM edusigns GROUP BY id_user ORDER BY most_present DESC LIMIT 1;
+---------+--------------+
| id_user | most_present |
+---------+--------------+
|       1 |            2 |
+---------+--------------+