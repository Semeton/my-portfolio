#!/usr/bin/env bash
# Renders docs/resume/resume.html to public/semeton-balogun-resume.pdf with headless Chrome.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$ROOT/public/semeton-balogun-resume.pdf" \
  "file://$ROOT/docs/resume/resume.html"
