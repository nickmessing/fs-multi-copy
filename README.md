# fs-multi-copy
Node.JS copy multiple files

### Installation

```
npm install fs-multi-copy -S
```
or
```
yarn add fs-multi-copy
```

### How to use

```js
const mc = require('fs-multi-copy')

mc([
  {
    from: 'tmp.0',
    to: 'tmp.0.out'
  },
  {
    from: 'tmp.1',
    to: 'tmp.1.out'
  }
]).then(() => {
  // copied
}).catch(err => {
  // something wrong happened
})
