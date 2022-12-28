$('.delete-cupcake').click(deleteCupcake);

async function deleteCupcake() {
	// here it's going to look for data-id
	const id = $(this).data('id');
	await axios.delete(`/api/cupcakes/${id}`);
	// the keyword this, is referencing a button
	$(this).parent().remove;
}
