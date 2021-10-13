//import React, { useState, useEffect } from 'react';
import './styles/FullScreenView.css';
import React from "react";
import ii from "/tiktok.jpg";

function FullScreenView (props) {
	
	const closeFullView = () => {
		//console.log("closing page for " + props.selectedImg);
		props.setSelectedImg(null);
	}
	return (
		<div className='fullScreenView' onClick={() => closeFullView()}>			
			<img scr={ii} alt='full view goes here'></img>
		</div>
	)
}

export default FullScreenView;