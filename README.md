reInflect
=======

regex for spliting dasherize underscored and camelized words

```javascript
var reInflect = require("@nathanfaucett/re_inflect");


var parts = "asdf_asdf-asdfAsdf asdf.asdf".match(reInflect);
parts === ["asdf", "asdf", "asdf", "Asdf", "asdf.asdf"];
```
