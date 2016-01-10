#!/usr/bin/env node
import { express, renderer, start } from 'universal-redux';
import universalConfig from '../config/universal-redux.config.js';

const app = express(universalConfig);

app.use(renderer(universalConfig));

start(app, universalConfig);
