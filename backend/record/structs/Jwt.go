package structs

import "github.com/golang-jwt/jwt/v4"

type JwtClaim struct {
	Username string `json:"username"`
	jwt.StandardClaims
}
