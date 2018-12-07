DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  RoomID integer PRIMARY KEY
);

CREATE TABLE users (
  UserID integer auto_increment PRIMARY KEY,
  username char(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID integer auto_increment PRIMARY KEY,
  message char(50),
  roomname char(50)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/