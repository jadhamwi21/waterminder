package config

import (
	"os"

	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToAuthDatabase() {
	err := mgm.SetDefaultConfig(nil, "database", options.Client().ApplyURI(os.Getenv("AUTH_DB_URL")))
	if err != nil {
		panic("Couldn't Connect To Auth Database")
	}
}
