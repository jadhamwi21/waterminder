package utils

import (
	"net/http"
	"os"
	"time"
)

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

func CreateCookie(name, value string, expires time.Time) *http.Cookie {
	cookie := new(http.Cookie)
	cookie.Name = name
	cookie.Value = value
	cookie.Expires = expires
	cookie.HttpOnly = true
	cookie.Secure = true

	return cookie
}

func GetSecretKey() []byte {
	return []byte(os.Getenv("SECRET_KEY"))
}
