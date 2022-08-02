package structs

type SignupBody struct {
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Username  string `json:"username"`
	Password  string `json:"password"`
}

func (body SignupBody) Validate() map[string]string {
	invalidMap := map[string]string{}
	if body.FirstName == "" {
		invalidMap["firstname"] = "firstname is required"
	}
	if body.LastName == "" {
		invalidMap["lastname"] = "lastname is required"
	}
	if body.Username == "" {
		invalidMap["username"] = "username is required"
	}
	if body.Password == "" {
		invalidMap["password"] = "password is required"
	}
	return invalidMap
}
