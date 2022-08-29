# VaccinationFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `npm i` to build the project.

#Contrucción del proyecto
La parte del frontend tuvo una arquitectura basade en los components, con sus components para el administrador y el empleado, el administrador puede crear un nuevo empleado y este automaticamente consta de usuario y contraseña, también puede editar un empelado, eliminar. 
En el model esta la interfaz de empleado, en el service se consume el API, en el pipe esta el filtro del nombre de las vacunas, no se realizo el resto d filtros. 
