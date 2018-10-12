// import npm packages
import chalk from 'chalk'
import inquirer from 'inquirer';
// relative path
import dogList from './lib/dogList'

const isEntered = (answers) => {
  return answers.isEnter
};

const questions = [
  {type: 'confirm', name: 'isEnter', message: 'ワンちゃんの情報を見ますか？'},
  {when: isEntered, type: 'list', name: 'dog', message: 'どのワンちゃんの情報を見ますか？', choices: dogList},
];

// use npm packages
console.log(chalk.cyan.bold('ペットショップへようこそ！'));
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('------------------');

    // object destructuring
    const {
      isEnter,
      dog,
    } = answers;

    isEnter ? dog.info() : console.log('またのお越しをお待ちしております。')
  });
