INSERT INTO users (Username, Password, Email)
VALUES 
('user1', 'password1', 'user1@example.com'),
('user2', 'password2', 'user2@example.com'),
('user3', 'password3', 'user3@example.com');

INSERT INTO movies (Title, Genre, ReleaseYear)
VALUES 
('Inception', 'Science Fiction', 2010),
('The Dark Knight', 'Action', 2008),
('The Lion King', 'Animation', 1994);

INSERT INTO usersmovies (UserID, MovieID, DateAdded)
VALUES 
(1, 1, '2023-06-09'),
(1, 2, '2023-06-10'),
(2, 1, '2023-06-10'),
(2, 3, '2023-06-11'),
(3, 3, '2023-06-12');