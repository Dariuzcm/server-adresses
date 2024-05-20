--
-- Name: localidad; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--
use catalogos_mx;

CREATE TABLE localidad (
    clave character(2) NOT NULL,
    estado character varying(3) NOT NULL,
    descripcion character varying(100) NOT NULL
);


ALTER TABLE localidad
    ADD CONSTRAINT comercio_exterior_localidades_pkey PRIMARY KEY (clave, estado);

