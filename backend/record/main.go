package main

import (
	"waterminder/record_service/configs"
	"waterminder/record_service/groups"
	"waterminder/record_service/middlewares"

	"github.com/labstack/echo/v4"
)

func main() {

	configs.ConnectToRecordsDatabase()
	configs.LoadEnvironmentVariables()
	app := echo.New()
	middlewares.GeneralMiddlewares(app)
	groups.ProtectedGroup(app)
	app.Logger.Fatal(app.Start(":8002"))
}
