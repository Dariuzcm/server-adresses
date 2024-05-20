use catalogos_mx;

CREATE TABLE estado (
    clave character varying(3) NOT NULL,
    pais character varying(4) NOT NULL,
    nombre_estado character varying(100) NOT NULL
);

ALTER TABLE estado
    ADD CONSTRAINT comercio_exterior_estados_pkey PRIMARY KEY (clave);