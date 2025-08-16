cronAdd("hn_update", '*/15 * * * *', () => {
  const hn = require(`${__hooks}/hn.js`)
  hn.update()
})

cronAdd("hn_publish", '*/5 * * * *', () => {
  const hn = require(`${__hooks}/hn.js`)
  hn.publish()
})
