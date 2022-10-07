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
npm run db:migrate
rpm run db:seed
npm start
```

## Descripción.
La API cuenta con los sieguientes endpoints:
> usuarios  
> medicos  
> pacientes  
> tratamientos  
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
- Médico
- Paciente

No todos los perfiles pueden consumir todos los endpoints. Para ello se utiliza un middleware que consulta la BD para determinar si está autorizado o no un usuario.

# Ver en postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23265105-b2c86daf-75f0-4376-ad3c-7d78f507d4be?action=collection%2Ffork&collection-url=entityId%3D23265105-b2c86daf-75f0-4376-ad3c-7d78f507d4be%26entityType%3Dcollection%26workspaceId%3Da869852f-0af4-409e-b7ba-563d9f8792b1)



