package Services

import (
	"fmt"
	"os"
	"time"
	"waterminder/auth_service/models"
	"waterminder/auth_service/structs"

	"github.com/golang-jwt/jwt/v4"
	"github.com/kamva/mgm/v3"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

func generateTokenPairs(username string) (*structs.JwtPair, *structs.CustomError) {
	secretKey := []byte(os.Getenv("SECRET_KEY"))
	const OneHundredEightyYears = 180 * 365 * 24 * time.Hour
	AtExpirationDate := time.Now().Add(OneHundredEightyYears)
	accessTokenClaims := &structs.JwtClaim{
		Username: username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: AtExpirationDate.Local().Unix(),
		},
	}
	fmt.Println(AtExpirationDate)
	_accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, accessTokenClaims)

	accessToken, err := _accessToken.SignedString(secretKey)
	if err != nil {
		return nil, structs.NewCustomError(500, "Error", err.Error())
	}
	return &structs.JwtPair{
		AT: accessToken,
	}, nil
}

func LoginUser(username, password string) (*structs.JwtPair, *structs.CustomError) {
	user := &models.User{}
	usersCollection := mgm.Coll(user)
	usersCollection.First(bson.M{"username": username}, user)
	if user.Username != "" && user.Password != "" {
		err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
		if err != nil {

			return nil, structs.NewCustomError(401, "Password", "incorrect password")
		}
		tokens, err := generateTokenPairs(user.Username)
		return tokens, err.(*structs.CustomError)
	} else {
		return nil, structs.NewCustomError(401, "Username", "user doesn't exist")
	}
}
