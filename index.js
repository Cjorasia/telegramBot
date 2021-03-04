// const { Telegraf } = require('telegraf')
const { Composer } = require('micro-bot')
const fetch = require('node-fetch');

    apikey: '752fdebad4f0126557b99d7259680da5'

// const bot = new Telegraf(1658432370:AAFj1RxAaXwTi_gSB6oNbqJo-b0oCZw9b6k)
const bot = new Composer

// Rest Commands
bot.start((ctx) => ctx.reply('Welcome'));

// bot.on('text', (ctx) => {
//     let query = ctx.update.message.text; // get query as text
//     apixuClient.current(query).then((current) => {
//       return ctx.reply(
//         `The current weather in ${query} is C: ${current.current.temp_c} F:${current.current.temp_f}`);
//     }).catch((err) => {
//       return ctx.reply('This city is not exists', err);
//     });
//   });

bot.on('text', (ctx) => {
    let query = ctx.update.message.text;
    return fetch(`http://api.weatherstack.com/current?access_key = 752fdebad4f0126557b99d7259680da5 & query = ${query}`, { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then(json => ctx.reply(json));

});

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

module.exports = bot
// bot.launch()


// radiant-garden-80462 APP_ID
// https://radiant-garden-80462.herokuapp.com/
// 1658432370:AAFj1RxAaXwTi_gSB6oNbqJo-b0oCZw9b6k  -- BOT TOKEN
