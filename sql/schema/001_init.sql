-- +goose Up
CREATE TABLE public.tenants (
	"id" serial NOT NULL UNIQUE PRIMARY KEY,
	"name" text NOT NULL UNIQUE,
	"schema" text NOT NULL UNIQUE
);

-- +goose Down
DROP TABLE public.tenants