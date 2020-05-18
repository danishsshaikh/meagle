import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar = (props) => {

	const avatarlistarray = [
		{
			id: 1,
			name :"Aryan Veturekar",
			work :"The Dreamer"
		},
		{
			id: 2,
			name :"Danish Shaikh",
			work :"The Funny one"
		},
		{
			id: 3,
			name :"Himanshu Singh",
			work :"The Intellectual"
		},
		{
			id: 4,
			name :"Swastik Patil",
			work :"The Foodie"
		}
	]

	// map(callback(currentvalue, index, array) arg)

	const arrayAvatarCard = avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist id={avatarlistarray[i].name}
							name={avatarlistarray[i].name}
			 					work={avatarlistarray[i].work}/>
	})

	return (
		<div className="mainpage">
			<h1 className ="tc">Welcome to the Meagle Clan</h1>
				{arrayAvatarCard}		 								 								 					
		</div>
	)
}

export default Avatar;