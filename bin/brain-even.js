#!/usr/bin/env node
import game from '../src/index.js';
import evenGame from '../src/games/even.js';
import { expression } from '../src/expression.js';

const evenStart = () => game(expression.descriptionEven, evenGame);
// выдает фразу 'Answer "yes" if... "no".' и запускает игру

evenStart();
