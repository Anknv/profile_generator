const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Thank you for your valuable feedback: ${activity}`);

    rl.question('What do you listen to while doing that? ', (listen) => {
      console.log(`Thank you for your valuable feedback: ${listen}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        console.log(`Thank you for your valuable feedback: ${meal}`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (thing) => {
          console.log(`Thank you for your valuable feedback: ${thing}`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`Thank you for your valuable feedback: ${sport}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`Thank you for your valuable feedback: ${superpower}`);
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${thing} for ${meal},` +
                `prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});