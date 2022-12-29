$('.delete-cupcake').click(deleteCupcake);

async function deleteCupcake() {
	// here it's going to look for data-id
	const id = $(this).data('id');
	await axios.delete(`/api/cupcakes/${id}`);
	// the keyword this, is referencing a button
	$(this).parent().remove;
}

const URL = 'http://localhost:5000/api';
$('#new-cupcake-form').click(addNewCupcake);

async function addNewCupcake(evt) {
	evt.preventDefault();

	let flavor = $('#flavor').val();
	let size = $('#size').val();
	let rating = $('#rating').val();
	let image = $('#image').val();

	const newCupcakeResp = await axios.post(`${URL}/cupcakes`, {
		flavor,
		size,
		rating,
		image
	});

	let newCupcake = $(newCupcakeResp.data.cupcake);
	$('#list-cupcakes').append(newCupcake);
}
