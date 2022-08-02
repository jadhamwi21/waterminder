package middlewares

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func GeneralMiddlewares(app echo.Echo) {
	app.Use(middleware.Logger())
}
