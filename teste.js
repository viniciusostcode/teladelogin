const pass1 = 'senhafraca';
const pass2 = '$3nh@f0rt3';

const regex = /\W|_/;

console.log(regex.test(pass1));
console.log(regex.test(pass2));