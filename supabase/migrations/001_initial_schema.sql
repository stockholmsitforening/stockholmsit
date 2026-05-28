-- Contact messages from the contact form
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  city text not null,
  phone text,
  message text not null,
  created_at timestamptz default now() not null,
  read boolean default false not null
);

-- Membership applications from the bli-medlem form
create table if not exists membership_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  interests text[] default '{}',
  message text,
  status text default 'pending' not null check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz default now() not null
);

-- RLS: Both tables are write-only for public (anon key cannot read, service_role can)
alter table contact_messages enable row level security;
alter table membership_applications enable row level security;

-- Allow inserts from anon (public form submissions)
create policy "Allow public insert on contact_messages"
  on contact_messages for insert
  to anon
  with check (true);

create policy "Allow public insert on membership_applications"
  on membership_applications for insert
  to anon
  with check (true);

-- Only authenticated admins (service_role bypass) can read
-- No explicit select policy = only service_role can read
