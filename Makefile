install:
		npm ci
.PHONY : install

brain-games:
		node bin/brain-games.js
.PHONY : brain-games

brain-calc:
		node bin/brain-calc.js
.PHONY : brain-calc

brain-even:
		node bin/brain-even.js
.PHONY : brain-even

brain-gcd:
		node bin/brain-gcd.js
.PHONY : brain-gcd

brain-prime:
		node bin/brain-prime.js
.PHONY : brain-prime

brain-progression:
		node bin/brain-progression.js
.PHONY : brain-progression

publish:
		npm publish --dry-run
.PHONY : publish

lint:
		npx lint
.PHONY :make lint
