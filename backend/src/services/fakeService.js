const {
    nanoid
} = require('nanoid');
const consola = require('consola');
require('module-alias/register');
var faker = require('faker');
global.thinky = require('thinky')({
    host: '10.5.55.11'
});
require('colors');
const User = require('@model/user');


var delay = (ms) => new Promise((res, rej) => setTimeout(() => res(), ms));

[...Array(1000)].forEach(async e => {
    const fakeUser = new User({
        name: faker.name.findName(),
        nickname: faker.name.findName(),
        email: faker.internet.email(),
        avatar: nanoid(96),
        usertype: 1
    });
    fakeUser.save();
    consola.success(`Faked ${JSON.stringify(fakeUser.name).green}`);
    await delay(50);
});

consola.warn("DONE");