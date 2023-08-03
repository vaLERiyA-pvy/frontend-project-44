#!/usr/bin/env node
import game from '../src/index.js';
import gcdGame from '../src/games/gcd.js';
import { expression } from '../src/expression.js';

const gcdStart = () => game(expression.descriptionGcd, gcdGame);

gcdStart();
