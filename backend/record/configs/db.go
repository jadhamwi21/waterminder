package configs

import (
	"os"

	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToRecordsDatabase() {
	err := mgm.SetDefaultConfig(nil, "database", options.Client().ApplyURI(os.Getenv("RECORD_DB_URL")))
	if err != nil {
		panic("error connecting to reminders database")
	}

}
