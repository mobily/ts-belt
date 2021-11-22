#!/usr/bin/env sh

mkdir -p ./.results

date_now=$(date "+%F-%H-%M")
results_file="./.results/results-$date_now.txt"

rm -f $results_file

glob_files=".*"

complex=($(grep -HRl "$glob_files" ./complex))

for i in "${complex[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a $results_file
  sed -i '' "s/\\[23m//g" $results_file
  sed -i '' "s/\\[3m//g" $results_file
done

simple=($(grep -HRl "$glob_files" ./simple))

for i in "${simple[@]}"
do
  node "./index.js" "$i" 2>&1 | tee -a $results_file
  sed -i '' "s/\\[23m//g" $results_file
  sed -i '' "s/\\[3m//g" $results_file
done
