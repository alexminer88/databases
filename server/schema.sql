DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  RoomID integer PRIMARY KEY,
  roomname char

);

CREATE TABLE users (
  UserID integer auto_increment PRIMARY KEY,
  username char
);

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID integer auto_increment PRIMARY KEY,
  message text,
  RoomID integer,
  UserID integer,
  FOREIGN KEY (RoomID) REFERENCES rooms(RoomID)
  FOREIGN KEY (UserID) REFERENCES users(UserID)
   
);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/