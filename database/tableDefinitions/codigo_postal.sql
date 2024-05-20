use catalogos_mx;

CREATE TABLE codigo_postal (
    cp character varying(6) NOT NULL,
    estado character varying(3),
    municipio character(3),
    localidad character(2)
);

ALTER TABLE codigo_postal
    ADD CONSTRAINT codigo_postal_localidad_fkey FOREIGN KEY (localidad, estado) REFERENCES localidad(clave, estado);

	
ALTER TABLE codigo_postal
    ADD CONSTRAINT codigo_postal_municipio_fkey FOREIGN KEY (municipio, estado) REFERENCES municipio(clave, estado);