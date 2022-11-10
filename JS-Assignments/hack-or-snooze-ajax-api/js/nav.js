'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
	console.debug('navAllStories', evt);
	hidePageComponents();
	putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
	console.debug('navLoginClick', evt);
	hidePageComponents();
	$loginForm.show();
	$signupForm.show();
}

$navLogin.on('click', navLoginClick);

/** When a user first logs in, update the navbar to reflect that. */

function updateNavOnLogin() {
	console.debug('updateNavOnLogin');
	$('.main-nav-links').show();
	$navLogin.hide();
	$navLogOut.show();
	$navUserProfile.text(`${currentUser.username}`).show();
}

/** Submit function when user clicks "submit" button */
function navSubmitClick(evt) {
	console.debug('navSubmitStoryClick', evt);
	hidePageComponents();
	$allStoriesList.show();
	$submitForm.show();
}
$navSubmitStory.on('click', navSubmitClick);

/** Favorites function when user clicks "favorites" button */

/** My Story function when user clicks "my story" button*/
