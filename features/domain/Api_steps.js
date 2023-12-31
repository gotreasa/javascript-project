/* eslint-disable import/no-extraneous-dependencies */
import { Given, When, Then, Fusion } from 'jest-cucumber-fusion';
import request from 'supertest';
import app from '../../src/api/app';

let endpoint;
let response;

Given(/^the API endpoint (.*)$/, (path) => {
  endpoint = path;
});

When('I call the endpoint', async (time) => {
  response = await request(app)
    .get(`${endpoint}/${time}`)
    .set({
      Accept: 'application/json',
    })
    .send();
});

Then('the response is 200', () => {
  expect(response.status).toBe(200);
});

Fusion('Api.feature');
