const ncp = require('ncp').ncp

const copyFile = file => new Promise((resolve, reject) => {
  ncp(file.from, file.to, err => err ? reject(err) : resolve())
})

module.exports = files => Promise.all(files.map(file => copyFile(file)))
