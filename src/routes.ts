import express, { response, Router } from 'express';
import { createAdController } from './useCases/CreateAd';
import { createGameController } from './useCases/CreateGame';
import { findUseController } from './useCases/FindGame';

const routes = express()

routes.get('/games/:id', (request, response) => { findUseController.handle(request, response) });
routes.post('/games/:id/ads', (request, response) => { createAdController.handle(request, response) })
routes.post('/games', (request, response) => { createGameController.handle(request, response) });

export { routes }