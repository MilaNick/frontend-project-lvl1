#!/usr/bin/env node
import engine from '../src/engine.js';
// eslint-disable-next-line import/named
import { runRound, desc } from '../src/games/progression.js';

engine(desc, runRound);
