<div align="center">

# Juventud Libertaria 🌟

Sitio web multipagina para la comunidad Juventud Libertaria: portada, portal, galeria, tienda y contacto.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=fff)
![Static](https://img.shields.io/badge/Sitio-Statico-1f2937)

[Demo](https://juventudlibertaria.netlify.app/) · [Documentacion](#-tabla-de-contenidos) · [LinkedIn](https://www.linkedin.com/in/augustovillegas/) · [Contacto](#-guias-de-uso)

[Tabla de Contenidos](#-tabla-de-contenidos) · [Inicio Rapido](#-inicio-rapido) · [Arquitectura](#-arquitectura) · [Deployment](#-deployment)

</div>

---

## 📚 Tabla de Contenidos

- [📖 Descripcion](#-descripcion)
- [✅ Caracteristicas](#-caracteristicas)
- [🧰 Stack Tecnologico](#-stack-tecnologico)
- [🚀 Inicio Rapido](#-inicio-rapido)
- [🏗️ Arquitectura](#-arquitectura)
- [🗂️ Estructura del Proyecto](#-estructura-del-proyecto)
- [🧩 Componentes / Modulos Principales](#-componentes--modulos-principales)
- [🧪 Validaciones](#-validaciones)
- [🌐 API Integration / Endpoints](#-api-integration--endpoints)
- [🧰 Scripts Disponibles](#-scripts-disponibles)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [📦 Deployment](#-deployment)
- [📘 Guias de Uso](#-guias-de-uso)
- [🧩 Personalizacion / Extension](#-personalizacion--extension)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## 📖 Descripcion

Este proyecto es un sitio web multipagina para presentar la comunidad Juventud Libertaria, con una portada hero, secciones informativas y accesos directos a portal, galeria, tienda y paginas institucionales. Esta pensado para usuarios que desean conocer el movimiento, navegar contenido visual y contactar al equipo desde un formulario simple. Es una aplicacion frontend estatica basada en HTML y Tailwind CSS via CDN.

---

## ✅ Caracteristicas

- [x] Navegacion multipagina con enlaces directos.
- [x] Seccion hero con CTA destacado.
- [x] Seccion de accesos rapidos a portal, galeria y tienda.
- [x] Formulario de contacto con validaciones HTML5.
- [x] Diseno responsive con Tailwind CSS.
- [x] Recursos locales de imagenes e iconos.

---

## 🧰 Stack Tecnologico

| Tecnologia | Proposito |
| --- | --- |
| HTML5 | Estructura de paginas y secciones. |
| Tailwind CSS (CDN) | Estilos y layout responsive. |
| Google Fonts | Tipografia del sitio. |
| Assets locales (img/, icons/) | Imagenes, logos e iconos. |

---

## 🚀 Inicio Rapido

### Prerrequisitos

- Navegador moderno (Chrome, Edge, Firefox).
- Opcional: servidor HTTP local para rutas relativas.

### Instalacion paso a paso

```bash
# Clona o descarga el repositorio
# Abre el archivo principal
start index.html
```

### Comandos reales

```bash
# Servidor local simple (Python)
python -m http.server 5173

# Alternativa con Node (si tienes Node instalado)
npx serve .
```

---

## 🏗️ Arquitectura

**Patrones utilizados**
- Sitio estatico multipagina.
- Componentes visuales repetibles via clases Tailwind.
- Separacion por paginas HTML dedicadas.

**Flujo de datos (diagrama ASCII)**

```
Usuario
  |
  v
Navegador
  |
  v
HTML estatico  --->  Assets locales (img/, icons/)
```

**Modulos principales**
- Paginas HTML independientes con navegacion comun.
- Recursos graficos centralizados.

---

## 🗂️ Estructura del Proyecto

```
juventudlibertaria/
├── batalla-cultural.html      # Pagina informativa
├── galeria.html               # Galeria de imagenes
├── index.html                 # Landing principal
├── organica.html              # Informacion institucional
├── portal.html                # Portal interno / informativo
├── sumarse.html               # CTA y formulario de adhesion
├── tienda.html                # Seccion tienda
├── tailwind.config.js         # Configuracion base (si aplica)
├── img/                       # Imagenes y fondos
└── icons/                     # Iconos del sitio
```

---

## 🧩 Componentes / Modulos Principales

- **Navbar**: enlaces a Inicio, Nosotros, Unite y Contacto.
- **Hero**: mensaje principal con CTA.
- **Accesos rapidos**: tarjetas/CTA para portal, galeria y tienda.
- **Formulario de contacto**: campos nombre, correo y mensaje.
- **Footer**: redes sociales y copyright.

---

## 🧪 Validaciones

- Validacion HTML5 `required` en campos obligatorios.
- Patron de email: `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
- Tipos de input correctos (`type="email"`).

---

## 🌐 API Integration / Endpoints

Actualmente el proyecto es **frontend estatico** y no consume APIs.

| Metodo | Endpoint | Proposito | Estado |
| --- | --- | --- | --- |
| - | - | No aplica | N/A |

---

## 🧰 Scripts Disponibles

No hay scripts de build en este proyecto. Para desarrollo local, usa un servidor HTTP:

| Comando | Descripcion |
| --- | --- |
| `python -m http.server 5173` | Levanta un servidor estatico local. |
| `npx serve .` | Alternativa con Node para servir archivos estaticos. |

---

## 🔐 Variables de Entorno

No se requieren variables de entorno para ejecutar el proyecto.

| Variable | Descripcion | Ejemplo |
| --- | --- | --- |
| - | No aplica | - |

---

## 📦 Deployment

**Servicio recomendado**: Netlify (sitio estatico).

**Pasos**
1. Conecta el repositorio en Netlify.
2. Define el directorio raiz como publicacion.
3. Build command: none.
4. Despliega y valida la URL publica.

**Configuracion ejemplo**

```txt
Build: none
Output: /
```

---

## 📘 Guias de Uso

1. Abre `index.html` o accede a la URL publicada.
2. Navega con el menu superior.
3. Usa los accesos rapidos para ir a portal, galeria o tienda.
4. Completa el formulario de contacto y envia el mensaje.

---

## 🧩 Personalizacion / Extension

- Reemplaza imagenes en `img/` para actualizar identidad visual.
- Ajusta colores en clases Tailwind para alinear branding.
- Agrega paginas nuevas siguiendo la estructura de las existentes.

<details>
  <summary>Ideas de extension</summary>

- Integrar backend para envio real de contacto.
- Agregar analytics con consentimiento de cookies.
- Incorporar CMS para contenidos dinamicos.

</details>

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Abre un issue con el cambio propuesto y crea un PR con descripcion clara y capturas si aplica.

---

## 📄 Licencia

MIT.

---

<div align="center">

Gracias por apoyar a la comunidad Juventud Libertaria.

[Volver arriba](#juventud-libertaria-)

</div>
