import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
// import { Button } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';

/** Displays homepage.
 * 
 * -If a user is logged out, the page displays a Login and Sign Up button.
 * -If a user is logged in, the page renders a message welcoming the user.
 * -Displays navbar that renders a Login and Sign Up.
 * -Props: user
 *
 */

// function Home({ user })
function Home() {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h1 className="font-weight-bold">Jobly</h1>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
	// const navigate = useNavigate;
	// return (
	// 	<section className="col-md-8">
	//         <Card>
	// 			<CardBody className="text-center">
	// 				<CardTitle>
	//                     {user && <>
	//                     <h1 className="font-weight-bold">Jobly</h1>
	// 					<p>Welcome back, {user.firstName}!</p>
	//                     </>}

	// 				</CardTitle>
	// 			</CardBody>
	// 		</Card>

	// 		<Card>
	// 			<CardBody className="text-center">
	// 				<CardTitle>
	//                     {!user && <>
	//                     <h1 className="font-weight-bold">Jobly</h1>
	//                     <p>All the jobs in one, convenient place.</p>
	//                     <div>
	//                         <Button onClick={()=> navigate("/login", {replace: true})}>Login</Button>
	//                         <Button onClick={()=> navigate("/signup", {replace: true})}>Sign Up</Button>
	//                     </div>
	//                     </>}

	// 				</CardTitle>
	// 			</CardBody>
	// 		</Card>
	// 	</section>
	// );
}

export default Home;
