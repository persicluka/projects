CREATE DATABASE pern-todo; 

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)

);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(35),
    name VARCHAR(35)
);

CREATE TABLE person (
    person_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(35) NOT NULLs,
    surname VARCHAR(35) NOT NULL,
    date_of_birth TIMESTAMP
)