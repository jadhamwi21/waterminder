package main

import (
	"waterminder/auth_service/config"
	"waterminder/auth_service/groups"
	"waterminder/auth_service/middlewares"

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
