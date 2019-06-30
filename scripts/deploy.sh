git checkout -B master
git add -f dist -n
git commit -am "Update website" -n
git filter-branch -f --prune-empty --subdirectory-filter dist
git push -f origin master -n
git checkout -

