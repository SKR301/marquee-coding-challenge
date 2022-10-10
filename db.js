const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    database: $ENV.database,
    user: $ENV.username,
    password: $password,
    port: 5432
});

module.exports = client;


/*--------------COPY EVERYTHING BELOW AND PASTE IN POSTGRESQL QUERY--------------------------


-- Table: public.companies

-- DROP TABLE IF EXISTS public.companies;

CREATE TABLE IF NOT EXISTS public.companies
(
    id integer NOT NULL DEFAULT nextval('companies_id_seq'::regclass),
    cin text COLLATE pg_catalog."default" NOT NULL,
    company text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT companies_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.companies
    OWNER to postgres;


----------------------------------------------------------------------------------------*/