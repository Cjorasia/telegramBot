// const { Telegraf } = require('telegraf')
const { Composer } = require('micro-bot')

// const bot = new Telegraf(1658432370:AAFj1RxAaXwTi_gSB6oNbqJo-b0oCZw9b6k)
const bot = new Composer


// Rest Commands
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

module.exports = bot
// bot.launch()


// radiant-garden-80462 APP_ID
// https://radiant-garden-80462.herokuapp.com/
// 1658432370:AAFj1RxAaXwTi_gSB6oNbqJo-b0oCZw9b6k  -- BOT TOKEN
