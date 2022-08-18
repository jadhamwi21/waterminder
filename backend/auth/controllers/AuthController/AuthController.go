package AuthController

import (
	Services "waterminder/auth_service/services"
	Structs "waterminder/auth_service/structs"
	"waterminder/auth_service/utils"

	"github.com/labstack/echo/v4"
)

func Signup(context echo.Context) error {
	signupBody := &Structs.SignupBody{}
	if err := context.Bind(signupBody); err != nil {
		return echo.NewHTTPError(echo.ErrInternalServerError.Code, utils.CreateResponseMessageNotification("Error", err.Error(), true))
	}

	invalidMap := signupBody.Validate()

	if len(invalidMap) > 0 {

		return echo.NewHTTPError(echo.ErrBadRequest.Code, utils.CreateResponseMessageNotification("Invalid Fields", utils.MapToStringWithLineBreaks(invalidMap), true))
	}

	err := Services.SignupUser(signupBody)

	if err != nil {
		return echo.NewHTTPError(err.Code, utils.CreateResponseMessageNotification(err.Message.Title, err.Message.Description, true))
	}
	return context.JSON(200, utils.CreateResponseMessageNotification("Signup", "signed up successfully", false))
}

func Login(context echo.Context) error {
	loginBody := &Structs.LoginBody{}

	if err := context.Bind(loginBody); err != nil {
		return echo.NewHTTPError(echo.ErrInternalServerError.Code, utils.CreateResponseMessageNotification("Error", err.Error(), true))
	}

	invalidMap := loginBody.Validate()
	if len(invalidMap) > 0 {
		return echo.NewHTTPError(echo.ErrBadRequest.Code, utils.CreateResponseMessageNotification("Invalid Fields", utils.MapToStringWithLineBreaks(invalidMap), true))
	}

	tokens, err := Services.LoginUser(loginBody.Username, loginBody.Password)
	if err != nil {
		return echo.NewHTTPError(err.Code, utils.CreateResponseMessageNotification(err.Message.Title, err.Message.Description, true))
	}
	AT := tokens.AT

	response := utils.MergeMaps(utils.CreateResponseMessageNotification("Login", "logged in successfully", false), map[string]interface{}{
		"access_token": AT,
	})
	return context.JSON(200, response)
}
