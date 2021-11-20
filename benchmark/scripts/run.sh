#!/usr/bin/env sh

rm -f ./results.txt

complex=()
while IFS= read -r -d $'\0'; do
    complex+=("$REPLY")
done < <(find "./complex" -name "*.js" -print0)

for i in "${complex[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a results.txt
  sed -i '' "s/\\[23m//g" results.txt
  sed -i '' "s/\\[3m//g" results.txt
done

simple=()
while IFS= read -r -d $'\0'; do
    simple+=("$REPLY")
done < <(find "./simple" -name "*.js" -print0)

for i in "${simple[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a results.txt
  sed -i '' "s/\\[23m//g" results.txt
  sed -i '' "s/\\[3m//g" results.txt
done
