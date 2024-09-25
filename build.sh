#!/bin/bash
# Install frontend dependencies and build the React app
cd frontend
npm install
npm run build
cd ..
# Install backend dependencies
pip install -r requirements.txt