package main

import (
	"fmt"
	"log"
	"net/http"
	"ocg-be/database"
	"ocg-be/routes"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	database.Connect()
	r := mux.NewRouter()

	routes.Setup(r)

	handler := cors.Default().Handler(r)

	host := fmt.Sprintf(":%d", 3000) //config
	fmt.Println("http://localhost" + host)
	log.Fatal(http.ListenAndServe(host, handler))
	

}
