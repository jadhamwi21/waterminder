package Services

import (
	"auth_service/models"
	Structs "auth_service/structs"

	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func findUserWithSameUsername(username string) bool {
	usersCollection := mgm.Coll(&models.User{})
	result := usersCollection.FindOne(nil, bson.M{"username": username})
	exist := result.Decode(nil) != mongo.ErrNoDocuments
	return exist
}

func SignupUser(signupData *Structs.SignupBody) *Structs.CustomError {
	exist := findUserWithSameUsername(signupData.Username)
	if exist {
		return Structs.NewCustomError(409, "Username", "username already exists")
	}
	user := models.NewUser(signupData.FirstName, signupData.LastName, signupData.Username, signupData.Password)
	err := mgm.Coll(user).Create(user)
	if err != nil {
		return Structs.NewCustomError(500, "Server Error", err.Error())
	}
	return nil
}
