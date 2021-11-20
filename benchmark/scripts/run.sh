#!/usr/bin/env sh

mkdir -p ./.results

date_now=$(date "+%F-%H-%M")
results_file="./.results/results-$date_now.txt"

rm -f $results_file

complex=()
while IFS= read -r -d $'\0'; do
    complex+=("$REPLY")
done < <(find "./complex" -name "*.js" -print0)

for i in "${complex[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a $results_file
  sed -i '' "s/\\[23m//g" $results_file
  sed -i '' "s/\\[3m//g" $results_file
done

simple=()
while IFS= read -r -d $'\0'; do
    simple+=("$REPLY")
done < <(find "./simple" -name "*.js" -print0)

for i in "${simple[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a $results_file
  sed -i '' "s/\\[23m//g" $results_file
  sed -i '' "s/\\[3m//g" $results_file
done
