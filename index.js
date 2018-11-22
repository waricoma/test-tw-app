'use strict';

const Twitter = require('twitter');

const consumer_key = '';
const consumer_secret = '';
const access_token_key = '';
const access_token_secret = '';

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});

const params = {count: 50};
client.get('custom_profiles/list', params, (error, tweets, response) => {
  if (!error) console.log(tweets);
});
