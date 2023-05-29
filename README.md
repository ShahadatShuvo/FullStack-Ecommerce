# FullStack-Ecommerce
# Frontend with React and Backend with Django

This repository contains the code for the front-end and back-end components of a web application built with React and Django.

## Frontend

The front-end is built using React, a popular JavaScript library for building user interfaces. It provides a responsive and interactive user interface for the web application.

### Prerequisites

Before running the front-end, ensure that you have the following software installed:

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory: `cd frontend`.
3. Install the dependencies: `npm install`.
4. Start the development server: `npm run dev`.
5. You will get the url to view the front-end.

### Folder Structure

The front-end code is organized as follows:

- `src/`: Contains the main source code files.
- `public/`: Contains the public assets and the `index.html` file.

## Backend

The backend is built using Django, a high-level Python web framework. It handles the server-side logic and provides APIs for the front-end to interact with.

### Prerequisites

Before running the backend, ensure that you have the following software installed:

- Python (version > 3.10)
- Django (version 4.2.1)

### Installation

1. Navigate to the `backend` directory: `cd backend`.
2. Create a virtual environment (recommended): `python -m venv venv` || `py -m venv venv`. [If not installed]
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate.bat`
   - On macOS/Linux: `source venv/bin/activate`
4. Install the dependencies: `pip install -r requirements.txt`. [If not installed]
5. Apply the database migrations: `python manage.py migrate`.  [If not installed]
6. Start the development server: `python manage.py runserver`.
7. Open your web browser and visit `http://localhost:8000` to view the backend API.

### Folder Structure

The backend code is organized as follows:

- `manage.py`: The entry point for Django commands.
- `backend/`: The Django project directory.
- `api/`: Contains the API views, serializers, and URLs.
- `models/`: Contains the database models.
- `views/`: Contains additional views or viewsets.

## Contributing

If you would like to contribute to this project, feel free to open a pull request or submit an issue. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

