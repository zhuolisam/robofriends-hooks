import React from 'react';

const Card = ({name,id,email}) => {
	return(
		<div className='tc f7 bg-light-green dib br3 ma2 grow pa3 bw2 shadow-5'>
			<img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
			<h2> {name} </h2>
			<p> {email} </p>
		</div>
	);
}

export default Card;  