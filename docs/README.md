# CUSTOM DEPARTMENT SEARCH COMPONENT

This is a custom component that allows you to search by department in the store.

In this component we worked with the following technologies:

- Vtex.
- React.
- Graphql.
- Typescript.
- Css.

## Component's images.
![DepartmentSearch Desktop-github](https://user-images.githubusercontent.com/87024446/219832542-f5fdc11c-4700-4982-aa26-baa6974182a6.png)

## Configuration 

### Step 1 - Clone

Cloning the following repository
- [Repository](https://github.com/Yesiblato/itgloberspartnercl-custom-department-search)

### Step 2 - Edit the Manifest.json 

Enter the manifest.json file and make the following changes to: `vendor`, `name`, `version`, `title` and `description`
as shown in the following example:

```js
{
"vendor": "itgloberspartnercl",
  "name": "custom-department-search",
  "version": "0.0.1",
  "title": "Search Bar customizada",
  "description": "Daremos la opción de elegir un departamento en nuestra barra de búsuqeda",
}
```
Also, check that the file has the following builders and the dependencies:

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Dependencies
```js
   "vtex.css-handles": "0.x",
   "vtex.store-graphql": "2.x",
   "vtex.store-components": "3.x"
```

### Paso 4 - Ejecutar el preview

### Step 3 - Install node-modules.

To carry out this installation of Node-Modules, it must be located in the `react` folder of the application and execute the `yarn` command, and will have all the necessary units to use this template installed.

### Step 4 - Execute the preview.

After performing the previous steps you can verify if its component is running by running the `Vtex Link` command if everything works correctly should see in` Sending locale change event`.

If the console shows any error, please verify the previous steps and re -execute `vtex link`.

### Step 5 - Deploy the component

Finally, to use the component you must add it to the `dependencies` in the `manifest.json` of your store (store-theme) as follows:

- vendor.name : version. 

For example:
```js
  "dependencies": {
   "itgloberspartnercl.custom-department-search": "0.x"
  }
```
And add the list-context block to the store-theme. For example:

```js
{
  "flex-layout.row#busqueda__opciones": {
    "children": [
      "departmentSearch"
    ]
  }
}
```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on 

| CSS Handles |
| ----------- | 
| `container__departmentGroup` | 
| `options__department` | 
| `title__department--title` | 


## Contributors ✨

Yesica Johana Blanco Torregrosa
