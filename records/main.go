package main

import (
	"record_service/configs"
	"record_service/groups"

	"github.com/labstack/echo/v4"
)

func main() {

	configs.ConnectToRemindersDatabase()
	configs.LoadEnvironmentVariables()
	app := echo.New()
	groups.ProtectedGroup(app)
	app.Logger.Fatal(app.Start(":8002"))
}
