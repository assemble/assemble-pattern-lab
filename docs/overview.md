This project uses [Assemble](https://github.com/assemble/assemble) to build projects with [pattern lab](http://pattern-lab.info/) conventions.

Note that _this isn't 100% feature complete, and the focus was mostly on implementing the patterns - not the actual demo site_, but this project does implement the actual patterns, e.g. the important parts, and you can easily add (or [request](https://github.com/jonschlinkert/assemble-pattern-lab/issues)) any functionality you require.

Also, there are a few differences in how this project handles templates. Instead of having to namespace partials, like `{{> organisms-latest-posts }}`, and then using a complex regex system for dynamically renaming these partials according to how they are organized in folders, here you can simply use `{{organism "latest-posts"}}`.

This has several advantages:

* Store your patterns wherever you want them, just tell Assemble where they are.
* We're adhering to mustache/handlebars conventions instead of working around them.
* We can easily extend and add new patterns, or allow metadata to be passed as context to templates and so on.