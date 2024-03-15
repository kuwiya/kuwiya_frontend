# Kuwiya Web Application

Welcome to the Kuwiya Web Application repository! Kuwiiya is a full-stack web application that combines the power of React for the front end, Django Rest Framework (DRF) for the back end, and MySql as the database. This project aims to provide a seamless and modern user experience for managing and organizing various activities.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Front End (React)](#front-end-react)
- [Back End (Django Rest Framework)](#back-end-django-rest-framework)
- [Database (MySql)](#database-mysql)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js and npm
- Python (3.6 or later)
- pip (Python package manager)
- MySql

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kuwiya/kuwiya_frontend.git
cd web-application
```

2. Front End (React):

```bash
cd frontend
npm install
npm start
```

3. Back End (Django Rest Framework):

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

4. Database (MySql):

   - Create a MySql database and update the database configuration in `backend/settings.py`.

Now you should have the Kuwiya web application up and running locally!

## Project Structure

- `frontend`: Contains the React front-end code.
- `backend`: Contains the Django Rest Framework back-end code.
- `database`: Database-related configurations and migrations.

## Front End (React)

The front-end of the Kuwiya web application is built using React, providing a responsive and interactive user interface. The source code is organized in the `frontend` directory.

### Key Technologies

- React
- React Router
- Axios

### Development

To work on the front end, navigate to the `frontend` directory and run:

```bash
npm install  # Install dependencies
npm start    # Start the development server
```

## Back End (Django Rest Framework)

The back end is built using Django Rest Framework (DRF), providing a robust and scalable API for the Kuwiya web application. The source code is organized in the `backend` directory.

### Key Technologies

- Django Rest Framework
- Django
- Django ORM

### Development

To work on the back end, navigate to the `backend` directory and run:

```bash
pip install -r requirements.txt  # Install Python dependencies
python manage.py migrate         # Apply database migrations
python manage.py runserver       # Start the development server
```

## Database (MySql)

Kuwiya uses MySql as its database. You need to create a MySql database and update the database configuration in `backend/settings.py`.

## Contributing

If you would like to contribute to the development of Kuwiiya, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use and modify the code according to the terms of the license.
