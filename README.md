# Esta es una web-app para poder ver usuarios y sus respectivos repositorios
Esta web-app fue creada usando: [create-react-app]

## Prerrequisitos
- Git
- Nodejs
- Llave de GitHub

## Instalación
```sh
git clone https://github.com/dantecarlo/github-repo-search.git
cd github-repo-search
npm i
```

## Credenciales
- Crear archivo `credenciales.js` en la carpeta src.
- Ir a `credenciales.default.js` y copiar todo en `credenciales.js`.
- Reemplazar 'xxx' en `GITHUB_KEY` con tu propia llave de GitHub.

## Iniciar
```sh
npm start
```

## Arquitectura
<<<<<<< HEAD
- Se separo esta web-app por componente la cual se encuentran en la carpeta src/componentes.
- Se separó los Querys en su propio archivo la cual se encuentran en la carpeta src/queries.
=======
- Se separo esta web-app por componente la cual se encuentran en la carperta src/componentes.
- Se separo los Querys en su propio archivo la cual se encuentran en la carperta src/queries.
>>>>>>> 8f25537670590d42e289204a6ee1de66ce5bfae9
- Se tiene un archivo central donde se arma los componentes y el resto de la web-app llamado App.js
