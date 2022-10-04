# Desarrollo de servicios web con Nodejs
Trabajo Final Integrador

# Contenedor de postgres:
La configuración se encuentra en la carpeta postgres_ct
```
docker-compose up -d
```
> Expone el puerto por default de postres (5432)  
> Recordar de setear usuario y password en el archivo docker-compose.yaml

## Inicializando el proyecto
```
npm install
npm run db:create
rpm run db:seed
npm start
```
