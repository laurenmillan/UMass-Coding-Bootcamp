/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 * query string: is a part of a URL that assigns values to specified parameters. 
 * Allows you to pass key-value-pairs into the URL.
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query. The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default image if no image exists, (image isn't needed until later)>
      }
 */

async function searchShows(query) {
	// searchShows is a separate function to test the "search API for shows",
	// this allows for the function to be re-used

	let response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`); // gets data from API
	// console.log(response);

	/** map: gets or sets the value of a collection of elements
	data: store arbitrary data associated with the matched elements or return the value 
	at the named data store for the first element in the set of matched elements
	*/

	const MISSING_IMAGE_URL = 'http://tinyurl.com/missing-tv';

	let shows = response.data.map((result) => {
		// console.log(result);
		let show = result.show;
		return {
			id: show.id,
			name: show.name,
			summary: show.summary,
			image: show.image ? show.image.medium : MISSING_IMAGE_URL
		};
	});
	return shows;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

// this function handles inserting the passed-in shows into DOM

function populateShows(shows) {
	const $showsList = $('#shows-list');
	$showsList.empty(); // empty: remove all child nodes of the set of matched elements from DOM

	for (let show of shows) {
		let $item = $(
			`<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
		 <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
			 <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>
       </div>
      `
		);

		$showsList.append($item);
	}
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 *	  - handleSearch event handler ties the two together: it gets the search term, 
 		gets the shows using searchShows, and fills in the DOM with populateShows.
 */

$('#search-form').on('submit', async function handleSearch(evt) {
	evt.preventDefault();

	let query = $('#search-query').val();
	if (!query) return;

	$('#episodes-area').hide();

	let shows = await searchShows(query);

	populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
	// TODO: get episodes from tvmaze
	//       by making GET request to
	//       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
	// TODO: return array-of-episode-info, as described in docstring above
	// { id, name, season, number }

	let response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

	console.log(response);

	let episodes = response.data.map((episode) => ({
		id: episode.id,
		name: episode.name,
		season: episode.season,
		number: episode.number
	}));
	return episodes;
}

/** Populate episodes list:
 *     - given list of episodes, add espiodes to DOM
 */

function populateEpisodes(episodes) {
	const $episodesList = $('#episodes-list');
	$episodesList.empty();

	for (let episode of episodes) {
		let $item = $(
			`<li>
		   ${episode.name}
		   (season ${episode.season}, episode ${episode.number})
		 </li>
		`
		);

		$episodesList.append($item);
	}

	$('#episodes-area').show();
}

// Handle click on show name

$('#shows-list').on('click', '.get-episodes', async function handleEpisodeClick(evt) {
	let showId = $(evt.target).closest('.Show').data('show-id'); // closest: for each element in the set, get the first element that matches the selector by testing the element itself and traversing through
	let episodes = await getEpisodes(showId);
	populateEpisodes(episodes);
});
