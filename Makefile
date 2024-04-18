build:
	rm -rf dist
	NODE_ENV=production npx webpack

install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

server:
	npx webpack serve
