import Botd from '@fpjs-incubator/botd-agent';

// Initialize an agent at application startup.
const botdPromise = Botd.load({
  publicKey: 'xCiNPhIyIySAAyywALkEJhlP',
});

try {
  // Get the bot detection result when you need it.
  // Result will contain the requestId property,
  // that you can securely verify on the server.
  // This is a top-level-await
  const botd = await botdPromise;
  const result = await botd.detect({tag: 'homepage'});
  // debugger
  console.log('BotD', result);
} catch (error) {
  console.error(error);
}
