package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

func LoadDotEnv() {
	currentDirectory, _ := os.Getwd()
	fmt.Print(currentDirectory + "/.env")
	err := godotenv.Load()
	if err != nil {
		panic("Couldn't Load DotEnv Variables")
	}
}
