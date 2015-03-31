# bcx-scalar-modifier

This tiny Node module is all about modifying some string value using predefined set of rules.

These rules are called modifiers and the object has only apply method that receives modifier name and other parameters.

We follow Node philosophy of keeping modules small and easily replaceable.
We assume that this module is used for template processing and is one of the dependencies for the bigger project.

The module is meant to be used in conjunction with other modules in order to modify any value that can be parsed out of the template.

Other Node module(s) will be responsible for parsing the templates and using the right modules to modify placeholder values.
This module will also be responsible to choosing this module or one of its alternative to do the job.
This makes it really interesting from OSS community's perspective, because everyone can adapt this module to their needs and redefine the set of modifier rules.

## Naming controversy

This module is part of JavaScript port of Temple PHP library, where similar class was called ScalarModifier.
It really works with scalar values, which means that expected values to modify are not objects (PHP version of library distinguishes between objects and arrays).
However, technically, numbers are also scalar values and string-modifier would be a better name in most cases to emphasize the fact that numbers are processed by different module.
We insist on keeping called this module scalar-modifier not only to have a more similar interface to PHP version, but also because we will handle dates and times besides the strings.

## Quick example

```js
var sm = require('bcx-scalar-modifier');

console.log(sm.apply('Title-Cased String', 'uppercase', [] , [], []));
```

Here the value 'Title-Cased String' is meant to be converted to uppercase without any additional parameters, available data or processing options.
