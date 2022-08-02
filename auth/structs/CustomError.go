package structs

type Message struct {
	Title       string
	Description string
}

type CustomError struct {
	Code    int
	Message Message
}

func (customError CustomError) Error() string {
	return customError.Message.Description
}

func NewCustomError(code int, title, description string) *CustomError {
	return &CustomError{Code: code, Message: Message{Title: title, Description: description}}
}
