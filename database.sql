
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "palette" (
	"id" serial PRIMARY KEY NOT NULL,
	"palette_name" varchar(255) NOT NULL,
	"user_id" int REFERENCES "user" NOT NULL,
	"hex0" varchar(7) NOT NULL,
	"hex1" varchar(7) NOT NULL,
	"hex2" varchar(7) NOT NULL,
	"hex3" varchar(7) NOT NULL,
	"hex4" varchar(7) NOT NULL,
	"hex5" varchar(7) NOT NULL,
	"img_url" varchar(2083) NOT NULL,
	"quantity0" DECIMAL(5, 2) NOT NULL,
	"quantity1" DECIMAL(5, 2) NOT NULL,
	"quantity2" DECIMAL(5, 2) NOT NULL,
	"quantity3" DECIMAL(5, 2) NOT NULL,
	"quantity4" DECIMAL(5, 2) NOT NULL,
	"quantity5" DECIMAL(5, 2) NOT NULL
	);
