const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'eclipithium.falix.gg',
  port: 25565,
  username: 'Eclipithium'
})

let center = null
let angle = 0

bot.once('spawn', () => {

  center = bot.entity.position.clone()

  setInterval(() => {

    if (!bot.entity || bot.entity.onGround) return

    angle += Math.PI / 8

    const radius = 12

    const x = center.x + Math.cos(angle) * radius
    const z = center.z + Math.sin(angle) * radius
    const y = center.y

    bot.lookAt({ x: center.x, y: center.y, z: center.z }, true)

    bot.entity.position.x = x
    bot.entity.position.y = y
    bot.entity.position.z = z

  }, 1000)

})

bot.on('error', console.log)
bot.on('kicked', console.log)
