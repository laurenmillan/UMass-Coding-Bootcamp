function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	let item = items[idx];
	return item;
}

function remove(items, item) {
	return items.filter((i) => i !== item);
}

export { choice, remove };
