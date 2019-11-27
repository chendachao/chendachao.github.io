#!/bin/sh

git config --global user.name "chendachao"
git config --global user.email "chendachao@outlook.com"
# git remote rm origin
# git remote add origin https://chendachao:${GITHUB_TOKEN}@github.com/chendachao/chendachao.github.io.git
git remote set-url origin 'https://chendachao:${GITHUB_TOKEN}@github.com/chendachao/chendachao.github.io.git'


