#!/bin/bash

cd sql/schema

goose postgres "postgres://postgres:postgres@localhost:5432/postgres" up

cd ../..