package main

import (
	"database/sql"
	"fmt"
	"hanyelC/multitenant-test/database"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

func main() {
	db, err := sql.Open("postgres", "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}

	dbQueries := database.New(db)

	router := http.NewServeMux()
	router.HandleFunc("POST /create-tenant", func(w http.ResponseWriter, r *http.Request) {
		tx, err := db.Begin()
		if err != nil {
			fmt.Println("error", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}
		defer tx.Rollback()
		qtx := dbQueries.WithTx(tx)
		// set other schema here
		err = qtx.SetTenant(r.Context(), "foo")
		if err != nil {
			fmt.Println("error", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}

		// create the table
		err = qtx.CreateUsersTable(r.Context())
		if err != nil {
			fmt.Println("error", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}

		// set default schema back here
		// err = qtx.SetTenant(r.Context(), "public")
		// if err != nil {
		// 	fmt.Println("error", err.Error())
		// 	w.WriteHeader(http.StatusInternalServerError)
		// 	w.Write([]byte(err.Error()))
		// 	return
		// }
		err = tx.Commit()
		if err != nil {
			fmt.Println("error", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}

		fmt.Println("deu bom")
	})

	router.HandleFunc("GET /create-tenant", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "ixe")
	})

	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	log.Println("Starting server on port :8080")
	server.ListenAndServe()
}
