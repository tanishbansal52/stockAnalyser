#!/bin/bash
# Start the Django development server
python manage.py runserver &
# Start the React development server
cd frontend
npm start