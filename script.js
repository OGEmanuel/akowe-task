'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email');
const btn = document.getElementById('login');
const password = document.getElementById('password');
const incorrect = document.getElementById('incorrect');
const API_URL = 'https://issuance.akowe.app/account/login';

const userEmail = 'test%40akowe.app';
const userPassword = 'Password_123';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const clickToLogin = async e => {
  e.preventDefault();

  if (email.value !== userEmail || password.value !== userPassword) {
    incorrect.classList.remove('hidden');
    return;
  }

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
    const result = await response.text();
    location.replace('./dashboard.html');
  } catch (error) {
    console.log('error', error);
  }
};

form.addEventListener('submit', clickToLogin);
