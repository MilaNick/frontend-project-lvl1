install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progress:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
index:
	bash index.sh
publish:
	npm publish --dry-run
lint:
	npx eslint --init
rec:
	asciinema rec
