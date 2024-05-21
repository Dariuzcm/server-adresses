CREATE TABLE records (
    id INT IDENTITY(1,1),
    cp character varying(9) NOT NULL,
    calle character varying(100) NOT NULL,
    colonia character(6) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME,
);

ALTER TABLE records
    ADD CONSTRAINT comercio_exterior_municipios_pkey PRIMARY KEY (clave, estado);

ALTER TABLE records
    ADD CONSTRAINT records_cp_fkey FOREIGN KEY (cp) REFERENCES codigo_postal(cp);

ALTER TABLE records
    ADD CONSTRAINT records_colonia_fkey FOREIGN KEY (colonia) REFERENCES colonia(clave);


