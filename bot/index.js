const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'grozaxrogue.aternos.me',
    port: 57530,
    username: 'AFK_Bot',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log("✅ Bot joined the server!");
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);
  });

  bot.on('end', () => {
    console.log("⚠️ Bot disconnected. Reconnecting...");
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.error("❌ Error:", err);
  });
}

createBot();
