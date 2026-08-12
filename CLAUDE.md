# Stockholms IT Förening

Sitio web para el cliente Stockholms IT Förening (asociación de IT en Estocolmo). Multiidioma (sv/es).

## Stack

- Next.js 15 (App Router) + TypeScript
- Supabase (auth + Postgres) — cuenta separada del cliente
- Tailwind CSS
- Vercel — cuenta separada del cliente (`stockholmsitfrening`)

## ⚠️ Deploy — cuenta del cliente

Este proyecto usa la cuenta de Vercel del **cliente**, no la cuenta personal de Bernardo.

```bash
npx vercel@56.5.0 --prod --yes \
  --token <VERCEL_TOKEN_CLIENTE> \
  --scope team_q5ekYyNH5axW19uSRCoTChTA \
  --cwd /home/bernardo/projects/stockholmsit
```

El token real está en la memoria de Claude (`~/.claude/projects/.../memory/reference_vercel.md`).

## Estructura clave

- `src/app/[lang]/` — rutas multiidioma (sv, es)
  - `page.tsx` — home
  - `om-oss/` — om föreningen
  - `kurser/` — cursos IT
  - `bli-medlem/` — hacerse miembro
  - `styrelsen/` — junta directiva
  - `kontakta-oss/` — contacto
- `src/dictionaries/` — textos en sv/es
- `src/components/` — Navbar, Footer, etc.
- `supabase/migrations/` — SQL versionado
