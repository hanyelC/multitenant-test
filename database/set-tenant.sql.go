// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.25.0
// source: set-tenant.sql

package database

import (
	"context"
)

const setTenant = `-- name: SetTenant :exec
SET search_path TO $1
`

func (q *Queries) SetTenant(ctx context.Context, dollar_1 interface{}) error {
	_, err := q.db.ExecContext(ctx, setTenant, dollar_1)
	return err
}
