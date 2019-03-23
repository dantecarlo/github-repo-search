# Esta es una app para poder ver usuarios y sus respectivos repositorios
Esta web-app fue creada usando: [create-react-app]

## Prerequisitos
- Git
- Nodejs
- Github Credentials

## Instalación
```sh
git clone https://github.com/dantecarlo/github-repo-search.git
cd github-repo-search
npm i
```

## Credenciales
- Crear archivo `credenciales.js` en la carpeta src.
- Ir a `credenciales.default.js` y copiar todo en `credenciales.js`.
- Reemplezar 'xxx' en `GITHUB_KEY` con tu propia llave de Github.

## Iniciar
```sh
npm start
```

## Arquitectura
- Se separo esta web-app por componente la cual se encuentran en la carperta src/componentes.
- Se separo los Querys en su propio archivo la cual se encuentran en la carperta src/queries.
- Se tiene un archivo central donde se arma los componentes y el resto de la web-app llamado App.js

