const axios = require('axios').default;
const fs = require('fs');
const clc = require('cli-color');
const figlet = require('figlet');
const webhook = require('./config');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const { title } = require('process');
var file_to_write = "nitro-codes-valids.txt";// The nitro codes go here (and in your webhook)
var threads = 35;//  Reduce the value or increase depending on the power of the cpu.
var global_counter = 0;  // don't touch !
var string_length = 69;
var delay_seconds =  1;

if(webhook.send === true){
    try {  
       const hook = new Webhook(webhook.url);
          hook.setUsername(webhook.username);
          hook.setAvatar(webhook.avatar);
          hook.send("```js\nStarting Nitro Gen\n```");
       } catch (error){
           console.log(clc.redBright('[E] |  Erreur : Quelque chose c est mal passe...\n\n'))
           console.error(error)
       }
}
try {
    console.log("\n")
    console.log(clc.yellowBright(` 
    
                                                                                                                                                       

    /$$$$$$                                                 
    /$$__  $$                                                
   | $$  \__/  /$$$$$$   /$$$$$$  /$$  /$$  /$$ /$$  /$$  /$$
   | $$       /$$__  $$ /$$__  $$| $$ | $$ | $$| $$ | $$ | $$
   | $$      | $$  \__/| $$  \ $$| $$ | $$ | $$| $$ | $$ | $$
   | $$    $$| $$      | $$  | $$| $$ | $$ | $$| $$ | $$ | $$
   |  $$$$$$/| $$      |  $$$$$$/|  $$$$$/$$$$/|  $$$$$/$$$$/
    \______/ |__/       \______/  \_____/\___/  \_____/\___/ 
                                                             
                                                             
                                                             
   `))
    console.log("\n")
    while(
        new Date(new Date().getTime() + delay_seconds * 3) > new Date()
    );
    console.clear(); 
} catch { /* */ }

const append_data_to_file = (data, file) => {
    existingData = fs.readFile(file, (err, data) => {if (err) return; return data;});
    fs.writeFile(file, existingData + "\n" + data, err => err);
};
const generateRandomNitro = () => {
    var nitroKey = "";
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 16; i++) {
        nitroKey +=  chars.charAt(randomIntBetween(0, chars.length));
    };
    return nitroKey;
};
function randomIntBetween (min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
};
async function main() {
    while (true) {
        var code = generateRandomNitro();
        const p = (text) => console.log(clc.yellowBright(`[${global_counter}]`)+text);
        try {
            var data = await axios.get(`https://discordapp.com/api/v6/entitlements/gift-codes/${code}?with_application=false&with_subscription_plan=true`);
            if(webhook.send === true){
             try {  
                const hook = new Webhook(webhook.url);
                   hook.setUsername(webhook.username);
                   hook.setAvatar(webhook.avatar);
                   hook.send("**Hey @everyone\nYou got a valid code:\n" + `Code "\`https://discord.gift/${code}\`"It was valid and it written in "||\`${file_to_write}\`||**"`);
                   /**
                    //send message with embed in discord by webhook (if you want)
                        const embed = new MessageBuilder()
                            .setTitle('My title here')
                            .setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
                            .addField('First field', 'this is inline', true)
                            .setColor('#00b0f4')
                            .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
                            .setDescription('Oh look a description :)')
                            .setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
                        hook.send(embed)
                    */
                } catch (error){
                    console.log(clc.redBright('[E] |  Error, something was wrong...\n\n'))
                    console.error(error)
                }
            }
            append_data_to_file(code, file_to_write);
            p(clc.greenBright("[+] | ")+`Code "https://discord.gift/${clc.yellowBright(code)}" is valid and will be written to file "${clc.yellowBright(file_to_write)}"`);
        } catch (error) {
            
            if (error.toString().includes("429"))
                p(clc.redBright("| [-] | ")+` Invalid code:  ${clc.redBright("https://discord.gift/") + clc.redBright(code)}`);
            else{
                console.log(clc.bgMagentaBright("| [-] |  Connection stopped \"https://discordapp.com\". Try reduce theards"));
                continue;
            }
        };
        global_counter +=  1;
    };
};
try {
figlet(`
            NITRO
      GENERATOR
              BY
         Croww
`, {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }, 
    function(err, data){
        if(err){
           console.log(clc.redBright('[E] |  Error, something was wrong...'));
           console.dir(err)
           return
        };
        console.log("\n")
        console.log(clc.blueBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`      Nitro GEN`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `      Nitro GEN`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.cyanBright(`                   Javascript`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `                   Javascript`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`             /-/ Coded by ${clc.yellow("Croww")} /-/`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `             /-/ Coded by Croww /-/`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + clc.yellowBright(`                      /-/ Github: ${clc.yellow("0xCroww")}  /-/`) + 
        " ".repeat(-1 + string_length - ` ┃ `.length - `                              /-/ Loading  /-/`.length) + clc.blueBright("┃"))
        console.log(clc.blueBright(`     ┃ `) + " ".repeat(-1 + string_length - ` ┃ `.length) + clc.blueBright("┃"))    
        console.log(clc.blueBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        console.log('\n')
        console.log(`${clc.magentaBright(data)}`)
        while(
            new Date(new Date().getTime() + delay_seconds * 4) > new Date()
        );
        console.clear(); 
    }
);
} catch { /* */ }
for (var i = 0; i < threads; i++) {
    console.clear();
    console.log(clc.green(`[S] |  Starting threads.. [${i+1}/${threads}]`));
    main();
};
/**
 * @INFO
 * If u use the code and post it put the link of my github in readme pls
 * @INFO
 * Coded by Croww
 * @INFO
 * github.com/0xCroww
 * @INFO
 */