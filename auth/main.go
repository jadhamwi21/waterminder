package main

import (
	"auth_service/config"
	"auth_service/groups"
	"auth_service/middlewares"

	"github.com/labstack/echo/v4"
)

func main() {

	config.ConnectToAuthDatabase()
	config.LoadDotEnv()
	app := echo.New()
	middlewares.SetupGeneralMiddlewares(app)
	groups.BaseGroup(app)
	app.Logger.Fatal(app.Start(":8001"))

}
