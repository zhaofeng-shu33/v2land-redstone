
CREATE TYPE public.enum_media_type AS ENUM (
    'traditional media',
    'social media',
    'institution'
);
CREATE TABLE public.media (
    name text,
    description text,
    icon text,
    type public.enum_media_type,
    id SERIAL primary key
);

