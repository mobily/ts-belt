#!/usr/bin/env sh

mkdir -p ./.results

results_file="./.results/results.md"

rm -f $results_file

glob_files=".*"

complex=($(grep -HRl "$glob_files" ./complex))

for i in "${complex[@]}"
do
  node "./index.markdown.js" "$i" 2>&1 | tee -a $results_file
done

simple=($(grep -HRl "$glob_files" ./simple))

for i in "${simple[@]}"
do
  node "./index.markdown.js" "$i" 2>&1 | tee -a $results_file
done
