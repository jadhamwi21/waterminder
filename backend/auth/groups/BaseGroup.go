package groups

import (
	"waterminder/auth_service/controllers/AuthController"

	"github.com/labstack/echo/v4"
)

func BaseGroup(app *echo.Echo) {
	baseGroup := app.Group("")
	baseGroup.POST("/signup", AuthController.Signup)
	baseGroup.POST("/login", AuthController.Login)
}
