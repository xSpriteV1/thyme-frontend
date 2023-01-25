![thyme-logo](https://user-images.githubusercontent.com/69500964/214454999-886901d8-1d1c-4d3f-9919-5affc1a3e6b7.svg)




# Thyme Desktop v0.0.1

Thyme is a time-tracking application similar in nature to Clockify, however Thyme is geared more for achieving personal goals and ambitions rather than simply monitoring billed hours. It is built using Vue3 and uses the Thyme Backend to process and retrieve data.

### Dependencies
Below are all the dependencies provided in the `package.json` file.
#### Core
- `vue ^3.2.45`
- `vue-router ^4.1.6`
- `@headlessui/vue ^1.7.7`
- `@heroicons/vue ^2.0.13`
#### Development
- `@types/node ^18.11.12`
- `@vitejs/plugin-vue ^4.0.0`
- `@vue/tsconfig ^0.1.3`
- `npm-run-all ^4.1.5`
- `tailwindcss ^3.2.4`
- `typescript ~4.7.4`
- `vite 4.0.0`
- `vue-tsc ^1.0.12`

## Vue-generated Project Info

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```
