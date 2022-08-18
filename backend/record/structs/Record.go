package structs

type RecordDetails struct {
	Cups         *int16   `json:"cups" bson:"cups"`
	LitersPerCup *float32 `json:"liters_per_cup" bson:"liters_per_cup"`
	Timestamp    *string  `json:"timestamp" bson:"timestamp"`
}

type Record struct {
	Username *string `json:"username" bson:"username"`
	RecordDetails
}

func (record Record) Validate() map[string]string {
	invalidMap := map[string]string{}
	if record.Cups == nil {
		invalidMap["cups"] = "number of cups are required"
	} else if *record.Cups < 0 {
		invalidMap["cups"] = "cups value should be greater or equel to zero"
	}
	if record.LitersPerCup == nil {
		invalidMap["liters_per_cup"] = "number of liters per cup is required"
	} else if *record.LitersPerCup <= 0 {
		invalidMap["liters_per_cup"] = "liters per cup value should be greater than zero"
	}

	if record.Timestamp == nil {
		invalidMap["timestamp"] = "timestamp is required"
	}
	return invalidMap
}
