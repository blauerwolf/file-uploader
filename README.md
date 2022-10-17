# Desarrollo de servicios web con Nodejs
File Uploader CDN

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
npm run db:migrate
rpm run db:seed
npm start
```

## Descripción.
La API cuenta con los sieguientes endpoints:
> usuarios  
> auth

La API devuelve maneja los errores en cada caso, devolviendo la respuesta HTTP correspondiente:
- 200 OK
- 201 Elemento creado
- 400 Error de parámetros
- 401 No autenticado
- 403 No autorizado
- 404 Elemento no encontrado
- 409 Imposibiliad de crear/eliminar registro

### Periles
Existen 4 perfiles distintos:

- Super Admmin
- Operador de Sistema
- Consulta

No todos los perfiles pueden consumir todos los endpoints. Para ello se utiliza un middleware que consulta la BD para determinar si está autorizado o no un usuario.

# Ver en postman




