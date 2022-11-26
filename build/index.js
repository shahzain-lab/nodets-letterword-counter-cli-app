#!/usr/bin/env node

// let's count what they just wrote
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
class Letter {
    getLetterLength(str) {
        const letters = str.replace(/\s/g, '');
        return letters.length;
    }
}
class Word {
    getWordLength(str) {
        const words = str && str.trim().replace(/\s+/g, ' ');
        // console.log(`"${words}`)
        const wordsCount = words.split(' ');
        return wordsCount.length;
    }
}
class InitApp {
    constructor(word, letter) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'topic',
                message: chalk.bgCyan('What\'s your today topic?: '),
                default: chalk.yellow('My favourite hobbies')
            }
        ]).then(({ topic }) => {
            if (topic) {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'paras',
                        message: chalk.bgGreen(`start writing on "${chalk.green(topic.trim())}": `)
                    }
                ]).then(({ paras }) => {
                    console.log(paras);
                    const letterLength = letter.getLetterLength(paras);
                    const wordLength = word.getWordLength(paras);
                    console.log(chalk.blue(`______________\n\nYour paragraph contains ${chalk.bold.magenta(letterLength)} letters and ${chalk.bold.magenta(wordLength)} words.`));
                    console.log('______________');
                });
            }
        });
    }
}
figlet.text('Text-Counter!', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}, ((err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('\n');
    console.log(gradient.rainbow(data));
    console.log('\n');
    new InitApp(new Word, new Letter);
}));
