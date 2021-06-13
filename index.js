export function render(fn) {
	return async function (selector, { children: c, ...p }) {
		const children = await Promise.all([].concat(c));
		const properties = { children, ...p };

		if (typeof selector === 'function') {
			return selector(properties);
		}

		return fn(selector, properties);
	};
}
