import test from 'ava';
import { render } from './index.js';

test('components work', async (t) => {
	let ran;

	await render(() => {
		ran = false;
	})(() => {
		ran = true;
	}, {});

	t.is(ran, true);
});

test('elements work', async (t) => {
	let ran;

	await render(() => {
		ran = true;
	})('p', {});

	t.is(ran, true);
});
