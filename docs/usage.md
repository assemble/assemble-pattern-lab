The following patterns have been implements:

* `atoms`: used in templates with `{{atoms "foo"}}`
* `molecules`: used in templates with `{{molecules "foo"}}`
* `organisms`: used in templates with `{{organisms "foo"}}`
* `templates`: used in templates with `{{templates "foo"}}`
* `pages`: Pages are specified using `src` property or `files` object/arrays in the Gruntfile config (see below)

For any templates to actually be found during the build, you'll have to first tell Assemble where to find them in Gruntfile, like so:

```js
assemble: {
  options: {
    // Pattern Lab templates
    patterns: {
      atoms: ['src/atoms/**/*.hbs'],
      molecules: ['src/molecules/**/*.hbs'],
      organisms: ['src/organisms/**/*.hbs'],
      templates: ['src/templates/**/*.hbs'],
    }
  },
  site: {

    // `pages` are defined here (you can use any of the Grunt files
    // patterns, e.g. src-dest, files object, files array, etc)
    files: {
      '_gh_pages/': ['src/pages/*.hbs']
    }
  }
}
```