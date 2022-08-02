package config

import (
	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToAuthDatabase() {
	err := mgm.SetDefaultConfig(nil, "auth_database", options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		panic("Couldn't Connect To Auth Database")
	}
}
