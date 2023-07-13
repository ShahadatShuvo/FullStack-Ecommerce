# FullStack-Ecommerce
# Frontend with React and Backend with Django

This repository contains the code for the front-end and back-end components of a web application built with React and Django.

## Frontend

### frontend Live Preview: vmart-frontend.vercel.app


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Backend

### Backend Live server: https://vmart-backend.up.railway.app

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

