package configs

import (
	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToRemindersDatabase() {
	err := mgm.SetDefaultConfig(nil, "records_database", options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		panic("error connecting to reminders database")
	}

}
