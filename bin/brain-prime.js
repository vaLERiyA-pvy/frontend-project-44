#!/usr/bin/env node
import game from '../src/index.js';
import primeGame from '../src/games/prime.js';
import { expression } from '../src/expression.js';

const primeStart = () => game(expression.descriptionPrime, primeGame);

primeStart();
