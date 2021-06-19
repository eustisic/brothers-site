CREATE DATABASE brothersdb;

CREATE TABLE events (
  id integer PRIMARY KEY,
  start_date date,
  end_date date,
  description text,
  title text,
  user_id integer REFERENCES users (id)
);

CREATE TABLE users (
  id integer PRIMARY KEY,
  name text,
  email text,
  password text
);
