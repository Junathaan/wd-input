DOCKER_COMPOSE = docker-compose

build: .env
	$(DOCKER_COMPOSE) build

run: .env
	$(DOCKER_COMPOSE) up

kill:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

install: build run

reset: kill install

.env: .env.example
	@if [ -f .env ]; \
	then\
		echo '\033[1;41m/!\ The .env.example file has changed. Please check your .env file (this message will not be displayed again).\033[0m';\
		touch .env;\
		exit 1;\
	else\
		echo cp .env.example .env;\
		cp .env.example .env;\
	fi