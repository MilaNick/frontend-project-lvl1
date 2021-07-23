install:
	npm ci
	npm install readline-sync
	npm install --save-dev eslint
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
index:
	bash index.sh
publish:
	npm publish --dry-run
lint:
	npx eslint --init
rec:
	asciinema rec
