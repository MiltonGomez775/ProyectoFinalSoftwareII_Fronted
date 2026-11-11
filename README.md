# 🏠 Gestión Inmobiliaria — Web

Cliente web de la plataforma de gestión inmobiliaria. Los propietarios publican y editan sus inmuebles y definen horarios de visita; los clientes exploran los inmuebles, ven el detalle y reservan citas.

![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![SSR](https://img.shields.io/badge/Angular-SSR-DD0031?logo=angular&logoColor=white)

**API:** [ProyectoFinalSoftwareII](https://github.com/MiltonGomez775/ProyectoFinalSoftwareII)

<!-- Agregue aquí una captura: ![Inmobiliaria](docs/captura.png) -->

---

## Funcionalidades

- Registro, inicio de sesión, recuperación y restablecimiento de contraseña.
- Selección y cambio de rol (propietario / cliente).
- **Propietario:** crear, listar y editar inmuebles; administrar espacios disponibles; ver las citas agendadas.
- **Cliente:** listar inmuebles, ver el detalle y reservar una cita de visita.

## Tecnologías

- Angular 20 con renderizado del lado del servidor (SSR + Express)
- TypeScript, CSS
- Jasmine + Karma para pruebas unitarias

## Estructura

```
src/app
├── components/   # login, registro, rol, menú, inmuebles, espacios, citas
├── services/     # auth, usuario, inmueble, espacios, citas
├── recuperar-contrasena/
└── restablecer-contrasena/
```

## Cómo ejecutarlo

```bash
npm install
npm start        # http://localhost:4200
```

Necesita la [API](https://github.com/MiltonGomez775/ProyectoFinalSoftwareII) corriendo en `http://localhost:8080`.

```bash
npm run build
npm run serve:ssr:proyectoFinalSoftwareFronted   # sirve la versión SSR
```

---

Proyecto de Ingeniería de Software II, Universidad del Quindío. Desarrollado por **[Milton Gómez](https://github.com/MiltonGomez775)**.
