CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  RoomID integer PRIMARY KEY,
  roomname char

);

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID integer auto_increment PRIMARY KEY,
  text text,
  RoomID integer,
  UserID integer,
  FOREIGN KEY (RoomID) REFERENCES rooms(RoomID)
  FOREIGN KEY (UserID) REFERENCES users(UserID)
   
);

CREATE TABLE users (
  UserID integer auto_increment PRIMARY KEY,
  username char,
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/