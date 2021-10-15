import './styles/FullScreenView.css';
import React from "react";

import Close from '@material-ui/icons/Close';

function FullScreenView (props) {
	
	const closeFullView = () => {
//		console.log("closing page for " + props.selectedImg);
		props.setSelectedImg(null);
	}
	return (
		<div className='fullScreenView' onClick={() => closeFullView()}>
			<img src={props.selectedImg}></img>
		</div>
		
	)
}

export default FullScreenView;