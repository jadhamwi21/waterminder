package models

import (
	"github.com/kamva/mgm/v3"
)

type Record struct {
	mgm.DefaultModel `json:",inline" bson:",inline"`
	Username         string  `json:"username" bson:"username"`
	Cups             int16   `json:"cups" bson:"cups"`
	LitersPerCup     float32 `json:"liters_per_cup" bson:"liters_per_cup"`
	Timestamp        string  `json:"timestamp" bson:"timestamp"`
}
