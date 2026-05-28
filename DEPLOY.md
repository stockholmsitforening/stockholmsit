# Despliegue en Vercel + Supabase

## 1. Supabase (cuenta nueva)

1. Crea cuenta en https://supabase.com con email alternativo
2. **New Organization** → "Stockholms IT Förening"
3. **New Project** → nombre: `stockholmsit`, región: EU Central (Frankfurt)
4. En el SQL Editor, ejecuta el archivo `supabase/migrations/001_initial_schema.sql`
5. Ve a **Settings → API** y copia:
   - `URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon / public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

## 2. GitHub

```bash
cd /Users/berra/Downloads/stockholmsit
git init
git add .
git commit -m "Initial commit: Stockholms IT Förening website"
# Crear repositorio en github.com y luego:
git remote add origin https://github.com/TU_USUARIO/stockholmsit.git
git push -u origin main
```

## 3. Vercel (cuenta nueva)

1. Crea cuenta en https://vercel.com con email alternativo
2. **Add New Project** → importa el repo de GitHub
3. En **Environment Variables** agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Click **Deploy**

## 4. Dominio personalizado (opcional)

En Vercel → Settings → Domains → agrega `stockholmsitforening.se`
Configura los DNS según las instrucciones de Vercel en tu proveedor de dominios.
