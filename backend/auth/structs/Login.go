package structs

import "github.com/golang-jwt/jwt/v4"

type LoginBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (loginBody LoginBody) Validate() map[string]string {
	invalidMap := map[string]string{}
	if loginBody.Username == "" {
		invalidMap["username"] = "username is required"
	}
	if loginBody.Password == "" {
		invalidMap["password"] = "password is required"
	}

	return invalidMap
}

type JwtClaim struct {
	Username string `json:"username"`
	jwt.StandardClaims
}

type JwtPair struct {
	AT string `json:"access-token"`
}
