// let's count what they just wrote
import inquirer from 'inquirer';


class Letter {
    
    getLetterLength(str: string): number {
        const letters = str.replace(/\s/g, '');
        return letters.length
    }
}

class Word {
    getWordLength(str: string): number {
        const words = str && str.trim().replace(/\s+/g, ' ');
        // console.log(`"${words}`)
        const wordsCount = words.split(' ');
        return wordsCount.length
    }
}

class InitApp {
    constructor(
        word: Word,
        letter: Letter
    ) {
         inquirer.prompt([
                {
                    type: 'input',
                    name: 'topic',
                    message: 'What\'s your today topic?: ',
                    default: 'My favourite hobbies' 
                }
            ]).then(({topic}) => {
                if(topic) {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'paras',
                            message: `start writing on "${topic.trim()}": `
                        }
                    ]).then(({paras}: {paras: string}) => {
                        console.log(paras);
                        const letterLength = letter.getLetterLength(paras)
                        const wordLength = word.getWordLength(paras);
                        console.log(`______________\n\nYour paragraph contains ${letterLength} letters and ${wordLength} words.`);
                        console.log('______________')
                    })
                }
            })
        }
}

new InitApp(new Word, new Letter);
