// main.go
package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)

	// API endpoint for adding tasks
	http.HandleFunc("/api/add", func(w http.ResponseWriter, r *http.Request) {
		// Handle adding tasks here
		// For simplicity, let's just log the task sent from the frontend
		task := r.FormValue("task")
		log.Println("New task:", task)
	})

	log.Println("Server started on :8080")
	http.ListenAndServe(":8080", nil)
}
