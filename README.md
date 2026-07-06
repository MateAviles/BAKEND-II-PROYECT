# Backend II Proyect

Sistema de gestión de eventos musicales y reservas (ticketing). Aplicación full-stack con una API REST backend y frontend vanilla.

## Tecnologías

| Capa | Tecnología |
|---|---|
| Runtime | Node.js |
| Backend | Express 5 |
| Base de datos | MongoDB (Mongoose 9) |
| Frontend | HTML5, CSS3, JavaScript vanilla |

## Arquitectura

El backend sigue una arquitectura en capas:

Cliente HTTP → app.js (Express Router)
Controllers (manejo req/res)
Services (lógica de negocio)
Repositories (acceso a datos)
Models (esquemas Mongoose)
MongoDB


## Estructura de carpetas

```
backend/
├── .env.example
├── .gitignore
├── package.json
└── src/
    ├── server.js            # Punto de entrada
    ├── app.js               # Configuración de Express
    ├── config/
    │   └── db.js            # Conexión a MongoDB
    ├── controllers/         # Manejo de req/res
    ├── dao/                 # Capa de acceso a datos (futuro)
    ├── middlewares/         # Middlewares de Express
    ├── models/              # Esquemas Mongoose
    ├── repositories/        # Operaciones con la base de datos
    ├── routes/              # Definición de rutas
    ├── services/            # Lógica de negocio
    └── utils/               # Utilidades
```

## Modelos de datos

- **User** — first_name, last_name, email, password, role (user|admin)
- **Event** — title, description, date, location, capacity, availableTickets, image, category, createdBy
- **Category** — name, description
- **Reservation** — user, event, quantity, reservationDate

## API Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/sessions` | Sesión test |
| GET | `/api/categories` | Listar categorías |
| POST | `/api/categories` | Crear categoría |
| GET | `/api/categories/:id` | Obtener categoría |
| DELETE | `/api/categories/:id` | Eliminar categoría |
| GET | `/api/events` | Listar eventos |
| POST | `/api/events` | Crear evento |
| GET | `/api/events/:id` | Obtener evento |
| PUT | `/api/events/:id` | Actualizar evento |
| DELETE | `/api/events/:id` | Eliminar evento |

Pendientes de implementar: `/api/auth`, `/api/users`, `/api/reservations`.

## Variables de entorno

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `PORT` | Puerto del servidor | `8080` |
| `MONGO_URL` | URI de conexión a MongoDB | `mongodb://127.0.0.1:27017/music-events-db` |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `JWT_SECRET` | Secreto para firmar tokens JWT | (definir en `.env`) |

## Instalación y ejecución

```bash
# Dependencias
cd backend
npm install

# Configurar variables de entorno
copy .env.example .env

# Asegurarse de que MongoDB esté corriendo
# Luego iniciar el servidor
npm run dev
```

El servidor inicia en `http://localhost:8080`.

## Estado del proyecto

**En desarrollo.** CRUD de Categorías y Eventos funcional. Pendiente: autenticación/autorización (JWT), lógica de reservas, middlewares (error handler, validación), frontend completo, y corrección de bugs menores en rutas y modelos.
