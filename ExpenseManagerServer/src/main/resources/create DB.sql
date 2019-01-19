CREATE TABLE public."User"
(
    user_id integer NOT NULL,
    password character varying(255) COLLATE pg_catalog."default",
    user_name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."User"
    OWNER to expensemanager;
	
	
CREATE TABLE public."Transactions"
(
    transaction_id integer NOT NULL,
    amount double precision NOT NULL,
    category character varying(255) COLLATE pg_catalog."default",
    date timestamp without time zone,
    "desc" character varying(255) COLLATE pg_catalog."default",
    sub_category character varying(255) COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Transactions"
    OWNER to expensemanager;