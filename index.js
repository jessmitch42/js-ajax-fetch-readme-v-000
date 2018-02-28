const app = "I don't do much.";

const token = 'f96f2dd2529a4498af20c8fce5191093f4f40fad'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
