package utils

import (
	"fmt"
	"os"

	"github.com/labstack/echo/v4"
)

func GetSecretKey() []byte {
	return []byte(os.Getenv("SECRET_KEY"))
}

func CreateResponseMessageNotification(title, description string, isError bool) map[string]interface{} {
	return map[string]interface{}{
		"message": map[string]string{
			"title":       title,
			"description": description,
		},

		"error": isError,
	}
}

func MapToStringWithLineBreaks(stringMap map[string]string) string {
	result := ""
	for _, element := range stringMap {
		result = result + element + "\n"
	}
	return result[:len(result)-1]
}

func MergeMaps(m1, m2 map[string]interface{}) map[string]interface{} {
	resMap := map[string]interface{}{}
	for key, value := range m1 {
		resMap[key] = value
	}
	for key, value := range m2 {
		resMap[key] = value
	}
	return resMap
}

func ExtractUsernameFromContext(context echo.Context) *string {
	username := fmt.Sprintf("%v", context.Get("username"))
	return &username
}
