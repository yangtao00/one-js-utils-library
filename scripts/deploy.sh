#!/usr/bin/env sh

set -e

pnpm docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/yangtao00/one-utils.git master:gh-pages

cd -