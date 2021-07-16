# TypeScript con React moderno

Este es un repo dirigido a dejar los apuntes para el curso de _Udemy: TypeScript with Modern React de Richard Oliver Bray_.

## Agregando TypeScript a un proyecto hecho con CRA

- Crea un proyecto de React con CRA:

```bash
npx create-react-app <my-react-project-name>
```

Ya instalado, es necesario agregar algunas librerías adicionales:

```bash
yarn add typescript @types/node @types/react @types/react-dom
```

- Crea un proyecto de React con TypeScript, usando Webpack

Comenzamos creando la carpeta y moviéndonos a la recién creada:

```bash
mkdir react-ts-webpack
cd react-ts-webpack
```

Iniciamos un proyecto de Node:

```bash
npm init -y
```

Creamos nuestro directorio `src` y los archivos de inicialización del proyecto y de configuración:

```bash
mkdir src
touch src/index.tsx
touch index.html webpack.config.js .babelrc
```

En el `index.html` creamos nuestro id para la app de react:

```html
<body>
    <div id="app-root"></div>
    <script src="bundle.js"></script>
</body>
```

Trabajamos sobre nuestro archivo `index.tsx` en `src`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
    return (
        <h1>Hello</h1>
    )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
```

Trabajamos ahora en nuestro archivo de configuración de webpack `webpack.config.js`:

```js
const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: 'src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: { extensions: ['ts', 'tsx', 'js'] },
    devServer: {
        contentBase: './',
        port: 5000
    }
}
```

Pasa el turno a nuestro archivo de configuración de babel `.babelrc`:

```json
{
    "presets": ["@babel/env", "@babel/react", "@babel/typescript"]
}
```

Hacemos unas modificaciones a nuestro archivo `package.json`:

```json
{
    "scripts": {
        "start": "webpack-dev-server --open",
        "build": "webpack"
    }
}
```

Ahora instalamos las dependencias que hacen falta:

```bash
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript webpack webpack-cli webpack-dev-server babel-loader react react-dom @types/react @types/react-dom
```

Ya podemos correr nuestro proyecto:

```bash
npm run start
```

Hacemos las pruebas de TS:

```tsx
// Agregamos esto al declarar el componente APP
function sum(a: number, b: number): number {
    return a + b;
}
```
