package middlewares

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func SetupGeneralMiddlewares(app *echo.Echo) {
	app.Use(middleware.Logger())
}
