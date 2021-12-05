#!/usr/bin/env bash

set -e
set -x
esy install
esy build
find ./_build/default -name '*.exe' -exec cp "{}" ./ \;
exit 0
