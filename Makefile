install:
	npm ci
	npm install readline-sync
	npm install --save-dev eslint
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint --init

