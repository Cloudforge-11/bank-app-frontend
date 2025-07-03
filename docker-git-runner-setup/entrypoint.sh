#!/bin/bash
set -e

cd /home/runner
echo "Fixing permissions for /home/runner/_work..."
mkdir -p /home/runner/_work
chown -R runner:runner /home/runner/_work

# Extract owner and repo from REPO_URL
OWNER=$(echo "$REPO_URL" | cut -d'/' -f4)
REPO=$(echo "$REPO_URL" | cut -d'/' -f5)

TOKEN_URL="https://api.github.com/repos/${OWNER}/${REPO}/actions/runners/registration-token"

echo "Requesting registration token for $REPO_URL..."
RUNNER_TOKEN=$(curl -s -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  "${TOKEN_URL}" | jq -r .token)

echo "Registering runner: $RUNNER_NAME"
./config.sh --unattended \
  --url "${REPO_URL}" \
  --token "${RUNNER_TOKEN}" \
  --name "${RUNNER_NAME}" \
  --work _work \
  --replace

echo "Starting runner...."
exec ./run.sh
