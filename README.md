# Smart-Todo App

This [Smart-Todo](https://github.com/Luwat/smart-todo) app is built with the [React.js](https://react.dev/) using [Vite](https://vitejs.dev/). 

The following 3rd party packages and resources were used for seemless local running of the application.

- [React-Router](https://reactrouter.com/en/main) for routing, managing route states `(loaders, actions, navigations etc)` and data.
- [UUID](https://www.npmjs.com/package/uuid) for generating unique ids
- [JSON-Server](https://www.npmjs.com/package/json-server) for running a local server and managing json data.
- [TailwindCSS](https://tailwindcss.com/) for styling
- [WebAIM](https://webaim.org/resources/contrastchecker/) to assertain the color contrast for accessibility purpose


Got background image from [Kari Shea](https://unsplash.com/@karishea?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/silver-iphone-5s-near-field-notes-book-Dn-BqRT9RBk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
