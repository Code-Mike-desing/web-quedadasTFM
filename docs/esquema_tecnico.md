1. Nombre del Proyecto
*QuedaConmigo* – Aplicación web para organizar quedadas entre personas con intereses comunes.

2. Objetivo del Proyecto
Desarrollar una plataforma web donde los usuarios puedan crear, unirse y gestionar quedadas sociales, con funciones de mensajería privada, validaciones, y control de usuarios.

3. Arquitectura del Proyecto


TFM-Proyecto/
│
├── backend/        → API REST con Node.js y Express
├── frontend/       → Interfaz HTML/CSS/JS
├── docs/           → Documentación del proyecto
├── .gitignore
└── README.md


4. Tecnologías utilizadas
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express
- Base de datos: MongoDB (Atlas)
- Control de versiones: Git + GitHub
- Otros: JWT, Dotenv, Mongoose

5. Patrones aplicados
- MVC (Modelo-Vista-Controlador)
- DAO (Data Access Object)

6. Módulos principales
- Usuarios: Registro, Login, Perfil
- Quedadas: Crear, Ver, Participar
- Mensajes: Chat entre usuarios
- Validaciones: Campos requeridos, permisos
- Seguridad: Tokens, roles

7. Esquema inicial de la Base de Datos

Colección: usuarios
- nombre
- correo
- contraseña (encriptada)
- edad
- intereses

Colección: quedadas
- título
- descripción
- fecha/hora
- participantes
- creadorId

Colección: mensajes
- remitenteId
- destinatarioId
- contenido
- fecha


8. Flujo general del usuario

1. Registro / Login
2. Crear o unirse a una quedada
3. Ver perfil de otros usuarios
4. Intercambiar mensajes privados
5. Gestionar quedadas propias
