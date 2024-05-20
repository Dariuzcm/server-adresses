use catalogos_mx;

--
-- Name: municipio; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE municipio (
    clave character(3) NOT NULL,
    estado character varying(3) NOT NULL,
    descripcion character varying(100) NOT NULL
);


ALTER TABLE municipio
    ADD CONSTRAINT comercio_exterior_municipios_pkey PRIMARY KEY (clave, estado);

ALTER TABLE municipio
    ADD CONSTRAINT municipio_estado_fkey FOREIGN KEY (estado) REFERENCES estado(clave);

