import { nanoid } from 'nanoid';

module.exports = {
	JWT_SECRET: nanoid(256),
};