-- Active: 1711554471501@@127.0.0.1@5432@plantdex
DROP TABLE IF EXISTS plant;
CREATE TABLE plant(
  id        UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name      VARCHAR(62) NOT NULL,
  sunlight  VARCHAR(8) NOT NULL,
  watering  INTEGER NOT NULL,
  category  VARCHAR(25) NOT NULL,
  imagePath VARCHAR(93) NOT NULL
);