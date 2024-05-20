use catalogos_mx;

--
-- Name: colonia; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE colonia (
    clave character(4) NOT NULL,
    cp character varying(6) NOT NULL,
    descripcion character varying(100) NOT NULL
);


ALTER TABLE colonia
    ADD CONSTRAINT comercio_exterior_colonias_pkey PRIMARY KEY (clave, cp);



CREATE INDEX idx_colonias_cp ON colonia (cp);


ALTER TABLE colonia
    ADD CONSTRAINT colonia_cp_fkey FOREIGN KEY (cp) REFERENCES codigo_postal(cp);

