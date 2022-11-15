install:
		npm ci
.PHONY : install

brain-games:
		node bin/brain-games.js
.PHONY : brain-games

publish:
		npm publish --dry-run
.PHONY : publish
