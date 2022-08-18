package models

import (
	"github.com/kamva/mgm/v3"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	mgm.DefaultModel `json:",inline" bson:",inline"`
	FirstName        string `json:"firstname" bson:"firstname"`
	LastName         string `json:"lastname" bson:"lastname"`
	Username         string `json:"username" bson:"username"`
	Password         string `json:"password" bson:"password"`
}

func NewUser(firstname, lastname, username, password string) *User {
	return &User{
		FirstName: firstname,
		LastName:  lastname,
		Username:  username,
		Password:  password,
	}
}

func (user *User) Creating() error {
	if err := user.DefaultModel.Creating(); err != nil {
		return err
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return echo.ErrInternalServerError
	}
	user.Password = string(hash)
	return nil
}
