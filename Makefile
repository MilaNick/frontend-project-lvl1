install:
	npm ci
    npm install readline-sync
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
