# 🚀 LazyStart

> 🪄 A zero-config, production-ready full-stack boilerplate.  
> 🖼️ Vue 3 + 🎨 Tailwind CSS + ⚙️ Node.js + 🐰 Bun + 🐘 PostgreSQL + 🐳 Docker + 🔐 Auth0  
> Because I’m lazy — and I like clean, scalable code.

---

**LazyStart** is a modern, developer-friendly template for building full-stack web applications with minimal effort and maximum speed.

- ⚡ **Frontend**: Vue 3, Vite, Tailwind CSS
- 🔧 **Backend**: Express + Knex + Bookshelf
- 🔐 **Authentication**: Auth0 (OAuth2 / JWT)
- 🐘 **Database**: PostgreSQL with automatic migrations
- 🐳 **Deployment**: Multi-stage Docker setup
- 🐰 **Runtime**: Bun — faster, lighter, simpler
- 📚 **API Docs**: Out-of-the-box Swagger at `/docs`

---

Skip the boilerplate. Focus on what matters.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![Node.js](https://img.shields.io/badge/node-22.x-blue) ![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blue) ![Bun](https://img.shields.io/badge/runtime-Bun-green) ![Vue 3](https://img.shields.io/badge/frontend-Vue%203-brightgreen) ![Dockerized](https://img.shields.io/badge/docker-ready-blue)

---

## ✨ Main Features
- **Frontend**: Vue 3, Pinia, Vue Router, TailwindCSS, Dropzone, FlyonUI, DataTables
- **Backend**: Express, Knex, Bookshelf, Helmet, Swagger, CORS
- **Authentication**: Auth0
- **Build & Runtime**: Vite, Bun (instead of npm/yarn), multi-stage Docker
- **Database**: PostgreSQL with automatic migrations in production
- **API Documentation**: available at `/docs` via Swagger

---

## 📁 Project Structure

```
├── Dockerfile
├── docker-compose.yml
├── package.json
├── bun.lock
├── .env, .env.development, .env.production
├── src/
│ ├── assets/
│ ├── components/
│ ├── server/ # Node.js backend with Express
│ │ ├── db/ # DB configuration and connection
│ │ └── api/ # REST endpoints
│ ├── stores/ # Pinia stores
│ ├── App.vue
│ ├── main.js
│ ├── router.js
│ ├── routes.js
│ └── style.css
```

---

## ⚙️ Local Setup

### Prerequisites
- [Node.js 22](https://nodejs.org/)
- [Bun](https://bun.sh/) (automatically installed in Docker)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) (optional)

### 1. Clone the repository

```bash
git clone https://github.com/your-user/repo-name.git
cd repo-name
```

### 2. Configure environment variables

Copy the `.env` file and adjust the values for your setup: (remember: if you don't want your environment variables to end up on GitHub, add them to the .gitignore file)

```bash
cp  .env.development  .env
```

Required values:

- `PORT=3000`
- `DATABASE_URL=postgres://user:password@localhost:5432/dbname`
- `AUTH0_DOMAIN=...`
- `AUTH0_CLIENT_ID=...`

### 3. Run in development

```bash
bun install
bun run dev
```

Accessible at:

- 🌐 Frontend SPA: [http://localhost:5173](http://localhost:5173)
- ⚙️ Backend API: [http://localhost:3000/api](http://localhost:3000/api)
- 📚 API Docs: [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 🐳 Run with Docker

Build and run in production:

```bash
docker build -t fullstack-app  .
docker run -p 3000:3000 --env-file .env fullstack-app
```

Or use `docker-compose`:

```bash
docker-compose up --build
```

---

## 🧪 Database & Migrations

This project uses **Knex** for migrations and **Bookshelf** as ORM.

Run migrations locally:

```bash
bun run knex migrate:latest
```

Or:

```bash
bun run knex:dev migrate:latest
```

Migrations are automatically applied in production.

---

## 🔐 Auth0 Authentication

Configured using `@auth0/auth0-vue`.

Update your credentials in `main.js`:

```js
createAuth0({
  domain:  "your-auth0-domain",
  clientId:  "your-auth0-client-id",
...
})
```

---

## 📦 Build

To compile the production frontend:

```bash
bun run build
```

Generated files will be located in the `dist/` directory.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

This repository is intended as a **starter boilerplate** for new projects.

Pull requests and improvements are welcome!

---

## 📬 Contact

Open an issue on GitHub or reach out via email for support or inquiries.
