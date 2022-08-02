package RecordController

import (
	"record_service/services"
	"record_service/structs"
	"record_service/utils"

	"github.com/labstack/echo/v4"
)

func InsertNewRecord(context echo.Context) error {
	username := utils.ExtractUsernameFromContext(context)
	record := &structs.Record{Username: username}
	if err := context.Bind(record); err != nil {
		return echo.NewHTTPError(400, utils.CreateResponseMessageNotification("Invalid Values", "make sure you entered valid values", true))
	}
	invalidMap := record.Validate()
	if len(invalidMap) > 0 {
		return echo.NewHTTPError(echo.ErrBadRequest.Code, utils.CreateResponseMessageNotification("Record", utils.MapToStringWithLineBreaks(invalidMap), true))
	}

	err := services.CreateNewRecord(record)
	if err != nil {
		return echo.NewHTTPError(err.Code, utils.CreateResponseMessageNotification(err.Message.Title, err.Message.Description, true))
	}
	return context.JSON(201, utils.CreateResponseMessageNotification("Record", "a new record has been saved", false))
}

func GetUserRecords(context echo.Context) error {
	username := *utils.ExtractUsernameFromContext(context)
	records, err := services.GetRecordsByUsername(username)
	if err != nil {
		return err
	}
	return context.JSON(200, records)
}
