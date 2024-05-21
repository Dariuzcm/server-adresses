
# Instrucciones para despliegue

- Se necesita un archivo ___.env___ el cual debe tener los siguientes campos
    TZ=UTC
    PORT=3333
    HOST=localhost

    LOG_LEVEL=info
    APP_KEY=drKmIG3ew-nOHdufrkg0xILRYOU89Ao-
    NODE_ENV=development

    DB_CONNECTION=mssql 
    #por defecto la aplicacion utiliza base de datos Microsoft Server Sql
    DB_HOST=host de base de datos
    DB_PORT=puerto de servicio
    DB_USER=nombre de usuario
    DB_PASSWORD=constraseña de servidor
    DB_DATABASE=nombre de base datos
    DB_SERVER=Nombre de servidor
- Instale dependencias con
     ```
        npm install
    ```
- Una vez realizada la configuracion del _.env_ realice la ejecucion de los seeders, tardara unos minutos
  - node ace db:seed
- Si gusta puede crear el proyecto construido con   
    ```
        npm run build
    ``` 
    el cual construira el projecto en la carpeta dist
  - En ese caso debe copiar el archivo .env de configuracion al directorio build
  - una vez alli puede ejecutar la aplicacion con
    ```
        npm run start
    ``` 
- En caso de ejecutar el proyecto sin buildear puede ejecutar los comando ___'npm run dev'___ o ___"npm run start"___

    ## La aplicacion se desplegara en el puerto 3333
    ### by José Reyna