import React, { useState } from 'react';

/** Renders search functionality.
 * 
 * -SearchForm calls the searchFor prop from the CompanyList component to perform the search query.
 * 
 */

function SearchForm({ searchFor }) {
	console.debug('SearchForm');

	const [ searchQuery, setSearchQuery ] = useState('');

	async function handleSubmit(evt) {
		evt.preventDefault();
		try {
			await searchFor(searchQuery);
		} catch (err) {
			console.error('Search failed:', err);
		}
	}

	function handleChange(evt) {
		setSearchQuery(evt.target.value);
	}

	return (
		<div className="SearchForm my-3">
			<form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
				<div className="input-group">
					<input
						className="form-control form-control-lg"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={handleChange}
						value={searchQuery}
						required
					/>
					<div className="input-group-append">
						<button className="btn btn-lg btn-primary" type="submit">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
