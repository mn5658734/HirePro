#!/bin/bash
# Push HirePro to GitHub - run this in your system Terminal (not Cursor)
# Cursor adds --trailer which older Git doesn't support

set -e
cd "$(dirname "$0")"

# Add remote if not exists
git remote add origin https://github.com/mn5658734/HirePro.git 2>/dev/null || git remote set-url origin https://github.com/mn5658734/HirePro.git

# Commit (run outside Cursor to avoid --trailer wrapper)
git commit -m "Initial commit - HirePro blue-collar and pink-collar job hiring platform"

# Push
git branch -M main
git push -u origin main

echo "Done! Pushed to https://github.com/mn5658734/HirePro"
