import express from 'express';
import { createGameController } from './useCases/CreateGame';
import { findUseController } from './useCases/FindGame';

const routes = express()

routes.get('/game/:id', (request, response) => { findUseController.handle(request, response) });
routes.post('/game', (request, response) => { createGameController.handle(request, response) });
routes.post('/game/:id/ad');

export { routes }