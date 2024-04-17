build:
	npx webpack serve

install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

##test:
##	npm test

build:
	rm -rf dist
	NODE_ENV=production npx webpack