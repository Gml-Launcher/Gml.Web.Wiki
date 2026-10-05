#!/bin/sh
set -eu

bootstrap_directory=$(mktemp -d "${TMPDIR:-/tmp}/gml-bootstrap.XXXXXX")
trap 'rm -rf "$bootstrap_directory"' 0
trap 'exit 1' 1 2 15

curl -fsSL \
    https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh \
    -o "$bootstrap_directory/gml-manager.sh"

. "$bootstrap_directory/gml-manager.sh"
