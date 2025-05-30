#!/bin/bash
cd /home/kavia/workspace/code-generation/resumepro-insights-26256-7f526b46/resume_insights
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

