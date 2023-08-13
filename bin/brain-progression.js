#!/usr/bin/env node
import game from '../src/index.js';
import progressionGame from '../src/games/progression.js';
import { expression } from '../src/expression.js';

const progressionStart = () => game(expression.descriptionProgr, progressionGame);

progressionStart();
