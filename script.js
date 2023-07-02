'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email');
const btn = document.getElementById('login');
const password = document.getElementById('password');
const API_URL = 'https://issuance.akowe.app/account/login';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const raw = JSON.stringify({
  ApplicationID: 'test',
  SecretKey: 'test',
  Email: email.value,
  Password: password.value,
});

const request = {
  method: 'POST',
  headers: headers,
  body: raw,
  redirect: 'follow',
};

const clickToLogin = async e => {
  e.preventDefault();

  try {
    const response = await fetch(API_URL, request);
    const result = response.text();
    console.log(result);
    console.log(email.value);
    console.log(password.value);
    location.replace('./index.html');
  } catch (error) {
    console.log('error', error);
  }
};

form.addEventListener('submit', clickToLogin);
