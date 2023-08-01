#!/usr/bin/env node
import game from '../src/index.js';
import calcGame from '../src/games/calc.js';
import { expression } from '../src/expression.js';

const calcStart = () => game(expression.descriptionCalc, calcGame);
// выдает фразу 'Answer "yes" if... "no".' и запускает игру

calcStart();
