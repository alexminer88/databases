CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  RoomID integer PRIMARY KEY,
  roomname char

);

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID integer auto_increment PRIMARY KEY,
  message text,
  RoomID integer,
  FOREIGN KEY (RoomID) REFERENCES rooms(RoomID)
   
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  UserID integer auto_increment PRIMARY KEY,
  username char,
  MessageID integer,
  FOREIGN KEY (MessageID) REFERENCES messages(MessageID)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

