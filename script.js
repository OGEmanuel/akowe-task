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

const clickToLogin = async e => {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        ApplicationID: 'test',
        SecretKey: 'test',
        Email: email.value,
        Password: password.value,
      }),
      redirect: 'follow',
    });
    const result = response;
    console.log(result);
    console.log(email.value);
    console.log(password.value);
    location.replace('./index.html');
  } catch (error) {
    console.log('error', error);
  }

  //   console.log(email.value);
  //   console.log(password.value);
};

form.addEventListener('submit', clickToLogin);
