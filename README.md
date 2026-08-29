# FoxCoding-Website

Repositorio del sitio web oficial de FoxCoding (CETYS). Hecho con [Next.js](https://nextjs.org), TypeScript y Tailwind CSS.

## Empezando

El proyecto vive dentro de la carpeta [foxcoding/](foxcoding/).

```bash
cd foxcoding
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio. Antes de abrir un PR corre también:

```bash
npm run lint
npm run build
```

## Cómo colaborar

Todos los miembros del equipo tienen acceso de escritura al repo (`FoxCoding-CETYS/FoxCoding-Website`), así que **no es necesario hacer fork**. El flujo es: clonar el repo, trabajar en una rama propia y abrir un Pull Request hacia `main`.

1. Clona el repo (una sola vez):

   ```bash
   git clone https://github.com/FoxCoding-CETYS/FoxCoding-Website.git
   cd FoxCoding-Website
   ```

2. Antes de empezar algo nuevo, actualiza `main` y crea tu rama:

   ```bash
   git checkout main
   git pull
   git checkout -b feat/nombre-corto-de-tu-cambio
   ```

   Usa un prefijo que describa el tipo de cambio, igual que en los commits: `feat/...`, `fix/...`, `chore/...`, etc.

3. Haz tus cambios y commitea siguiendo [Conventional Commits](#conventional-commits) (ver abajo).

4. Sube tu rama y abre un Pull Request hacia `main`:

   ```bash
   git push -u origin feat/nombre-corto-de-tu-cambio
   ```

   Pide que alguien más revise tu PR antes de mergear. Evita hacer push directo a `main`.

> ¿Eres externo al equipo y no tienes acceso de escritura? En ese caso sí haz fork del repo, trabaja en tu fork y abre el PR desde ahí hacia este repo.

## Conventional Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) para que el historial sea fácil de leer. El formato es:

```
<tipo>(<alcance opcional>): <descripción corta en imperativo>
```

Tipos más comunes que usamos en este repo:

| Tipo       | Cuándo usarlo                                              |
| ---------- | ------------------------------------------------------------ |
| `feat`     | Nueva funcionalidad o sección del sitio                     |
| `fix`      | Corrección de un bug                                         |
| `chore`    | Tareas de mantenimiento (dependencias, configuración, etc.) |
| `refactor` | Cambios de código que no agregan funcionalidad ni arreglan bugs |
| `style`    | Cambios de estilo/formato que no afectan la lógica            |
| `docs`     | Cambios solo en documentación (README, comentarios, etc.)    |

El `<alcance>` es opcional y describe qué parte del sitio tocaste, por ejemplo `ui`, `header`, `foxcoders`.

Ejemplos reales usados en este repo:

```
feat: Add PayPal button to SponsorTiers and UI/layout tweaks
fix(ui): fixed landing page
feat(ui): Sponsors card
docs: explain how to add your FoxCoder card
```

Reglas rápidas:

- Un commit, un cambio lógico. No mezcles cosas sin relación en un solo commit.
- La descripción va en minúscula (salvo nombres propios) y sin punto final.
- Si el commit rompe algo que otros deban saber, agrégalo en el cuerpo del mensaje.

## Agrega tu propia card en "FoxCoders"

La página [/foxcoders](foxcoding/app/foxcoders/page.tsx) lee automáticamente todas las carpetas dentro de [foxcoding/public/contributors/](foxcoding/public/contributors/) y genera una card por cada una. No hay que tocar código para aparecer ahí — solo agregar tu carpeta.

1. Crea una carpeta con tu **usuario de GitHub** dentro de `foxcoding/public/contributors/`:

   ```
   foxcoding/public/contributors/<tu-usuario-de-github>/
   ```

2. Dentro, crea un archivo `card.json` con este formato (mira [EmilioFex20/card.json](foxcoding/public/contributors/EmilioFex20/card.json) como ejemplo real):

   ```json
   {
     "name": "Tu nombre completo",
     "role": "Una línea sobre a qué te dedicas dentro de FoxCoding",
     "github": "tu-usuario-de-github",
     "bio": "Cuéntanos algo sobre ti o algún proyecto que hayas hecho",
     "tags": ["Python", "React"]
   }
   ```

   Todos los campos son obligatorios. `tags` es un arreglo de strings (lenguajes, tecnologías, intereses, lo que quieras mostrar como badges).

3. (Opcional) Si quieres una página de perfil personalizada en `/foxcoders/<tu-usuario>`, agrega también un `index.html` en la misma carpeta. Se renderiza dentro de un iframe. Si no lo agregas, tu card sigue apareciendo normal en la lista, solo que el link "View profile" mostrará "Profile coming soon".

4. Haz commit y abre tu PR:

   ```bash
   git add foxcoding/public/contributors/<tu-usuario-de-github>
   git commit -m "feat(foxcoders): add card for <tu-nombre>"
   ```

Corre `npm run dev` dentro de `foxcoding/` y visita `http://localhost:3000/foxcoders` para verificar que tu card se vea bien antes de subir el PR.
