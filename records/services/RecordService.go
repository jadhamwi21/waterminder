package services

import (
	"record_service/models"
	"record_service/structs"

	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/bson"
)

func CreateNewRecord(record *structs.Record) *structs.CustomError {
	recordsCollection := mgm.Coll(&models.Record{})
	err := recordsCollection.Create(&models.Record{
		Username:     *record.Username,
		LitersPerCup: *record.LitersPerCup,
		Cups:         *record.Cups,
		Timestamp:    *record.Timestamp,
	})

	if err != nil {
		return structs.NewCustomError(500, "Record", "error saving the record, resubmit later")
	}
	return nil
}

func GetRecordsByUsername(username string) ([]structs.RecordDetails, error) {
	recordsCollection := mgm.Coll(&models.Record{})
	cursor, err := recordsCollection.Find(nil, bson.M{"username": username})
	if err != nil {
		return nil, err
	}
	results := []structs.RecordDetails{}

	for cursor.Next(nil) {
		var elem structs.RecordDetails
		err := cursor.Decode(&elem)
		if err != nil {
			return nil, err
		}

		results = append(results, elem)
	}

	return results, nil
}
