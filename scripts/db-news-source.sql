
CREATE TYPE public.enum_media_role AS ENUM (
    'traditional',
    'social media',
    'institution'
);
CREATE TABLE public.media (
    name text,
    description text,
    icon text,
    type public.enum_media_role,
    id SERIAL primary key
);

