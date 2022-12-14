package groups

import (
	"waterminder/record_service/controllers/RecordController"
	"waterminder/record_service/middlewares"

	"github.com/labstack/echo/v4"
)

func ProtectedGroup(app *echo.Echo) {
	protectedGroup := app.Group("", middlewares.AuthMiddleware)
	protectedGroup.POST("/record", RecordController.InsertNewRecord)
	protectedGroup.GET("/records", RecordController.GetUserRecords)
}
