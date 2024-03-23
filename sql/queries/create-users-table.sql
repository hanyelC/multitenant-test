-- name: CreateUsersTable :exec
CREATE TABLE "users" (
  "id" serial NOT NULL UNIQUE PRIMARY KEY,
  "email" text NOT NULL UNIQUE
);
