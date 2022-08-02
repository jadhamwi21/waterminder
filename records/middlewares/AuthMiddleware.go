package middlewares

import (
	"fmt"
	"record_service/structs"
	"record_service/utils"
	"strings"

	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

func AuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {

	return func(context echo.Context) error {
		signedToken := context.Request().Header.Get(echo.HeaderAuthorization)
		if signedToken == "" {
			return echo.NewHTTPError(401, "Unauthorized")
		}
		splitToken := strings.Split(signedToken, " ")
		signedToken = splitToken[1]
		secretKey := utils.GetSecretKey()
		token, err := jwt.ParseWithClaims(signedToken, &structs.JwtClaim{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil {
			return echo.NewHTTPError(401, fmt.Sprintf("Unauthorized : %v", err.Error()))
		}
		claims := token.Claims.(*structs.JwtClaim)
		context.Set("username", claims.Username)

		return next(context)
	}
}
