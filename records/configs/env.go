package configs

import "github.com/joho/godotenv"

func LoadEnvironmentVariables() {
	err := godotenv.Load()
	if err != nil {
		panic("error loading environment variables")
	}
}
