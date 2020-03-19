cd git-lab
git checkout -B specific
git add -f dist -n
git commit -am "Update website" -n
git filter-branch -f --prune-empty --subdirectory-filter dist
#git push -f origin specific -n
git push -u -f origin specific
git checkout master

