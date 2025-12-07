# ReactDjangoBlog

A full‑stack blog application combining a Django REST back‑end with a React front‑end. It lets users view, create, edit, and read blog posts — all via a modern single‑page application (SPA) architecture.

## 📄 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
  - [Back-End Setup (Django)](#back-end-setup-django)  
  - [Front-End Setup (React)](#front-end-setup-react)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  
- [Contributing](#contributing)  
- [License](#license)

## About

ReactDjangoBlog is a simple blog platform built as a learning / hobby project. It demonstrates how to build a clean blog application using a REST‑style back‑end and a React front‑end for UI.  
The app supports:  
- Viewing a list of posts  
- Viewing individual post pages  
- Creating new posts  
- Editing existing posts  

The goal is to provide a lightweight, understandable example of a CRUD (Create/Read/Update/Delete) web application with clear separation between front‑end and back‑end logic.

## Features

- List all blog posts  
- View individual post details  
- Create a new post via a dedicated form  
- Edit existing posts  
- Clean, responsive UI with a navigation bar  
- RESTful API powered by Django + Django REST Framework  
- Front-end built in React, using React Router for routing

## Technology Stack

| Layer             | Framework / Library |
|------------------|--------------------|
| Back-End         | Django, Django REST Framework (DRF) |
| Database         | SQLite (default Django DB)          |
| Front-End        | React, React Router, Axios          |
| Styling / Layout | CSS modules / plain CSS             |

## Project Structure

/ (root)
├── backend/ # Django project
│ ├── blogpost/ # Django settings & config
│ ├── api/ # Django app with models, views, serializers
│ └── manage.py
├── frontend/ # React app
│ ├── src/
│ │ ├── components/ # NavBar, Footer, BlogPost, etc.
│ │ ├── pages/ # CreatePost, EditPost, PostPage, etc.
│ │ └── App.jsx
│ └── package.json
└── README.md

bash


> *You may have slight differences — adjust paths accordingly.*

## Getting Started

### Back-End Setup (Django)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate       # On Windows: .venv\Scripts\activate
pip install -r requirements.txt  # or pip install django djangorestframework
python manage.py migrate
python manage.py runserver
By default, the server will run at: http://127.0.0.1:8000/

Front-End Setup (React)
bash

cd frontend
npm install
npm run dev    # or npm start, depending on your setup
The React app should run at something like http://localhost:3000/ (or as configured by Vite, if you’re using it).

Usage
Open your browser and navigate to the React front‑end address.

Use the navigation bar to:

View all posts (Home)

Create a new post (Create Post)

Click on a post to view details. On the post page, click the edit icon to modify it.

Because the back‑end serves a REST API and the front‑end consumes it via Axios, this project can be used as a template — feel free to extend or modify it.

API Endpoints
Method	URL	Description
GET	/api/	List all posts
GET	/api/postpage/<id>/	Get a single post by ID
POST	/api/create/	Create a new post
PUT/PATCH	/api/edit-post/<id>/	Edit an existing post

Make sure your React axios calls and Django URL conf match correctly.

Future Improvements
Add delete functionality (delete posts)

Add user authentication (login/signup) so only authorized users can create/edit posts

Add validation and improved error handling on both front‑end and back‑end

Add pagination / search / filtering for posts

Add better responsive design and mobile‑first styling

Deploy the project (e.g. on Heroku, Vercel, or Render)

Contributing
Contributions are welcome! If you'd like to help:

Fork the repo

Create a new branch (git checkout -b feature/my-feature)

Make your changes

Submit a pull request

Please ensure code is clean and commented. If adding features, update README and any documentation accordingly.

License
This project is open-source and licensed under the MIT License — feel free to use, modify, or redistribute it.

