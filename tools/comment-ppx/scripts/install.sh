#!/usr/bin/env bash

set -e
set -x
esy install
esy build
cp ./_build/default/ppx.exe ./ppx.exe
exit 0
