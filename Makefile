DOCKER_COMPOSE  = docker-compose

EXEC_JS         = $(DOCKER_COMPOSE) run node

NPM             = $(EXEC_JS) npm

##
## Project
## -------
##

build:                                                            ## Build the app locally
	$(NPM) run build

build-docker:
	$(DOCKER_COMPOSE) build

clean: kill                                                       ## Stop the project and remove generated files
	rm -rf node_modules

kill:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

install: build-docker node_modules                                ## Install

reset: clean install                                              ## Stop and start a fresh install of the project

start: .env                                                       ## Start the containers
	$(DOCKER_COMPOSE) up node

node:                                                             ## Enter in the Node container with bash
	$(DOCKER_COMPOSE) run --rm node bash

lint:                                                             ## Run linter inside container
	$(NPM) run lint

stop:                                                             ## Stop the project
	$(DOCKER_COMPOSE) stop

fix-lint:                                                         ## Run linter inside container and force fix
	$(NPM) run fix-lint

build-lib:
	$(NPM) run build-bundle

.PHONY: build build-docker clean kill install reset start node stop fix-lint build-lib

##
## Utils
## -----
##

node_modules: package-lock.json
	$(NPM) ci
	@touch -c node_modules

package-lock.json: package.json
	$(NPM) install

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

.PHONY: node_modules package-lock.json
