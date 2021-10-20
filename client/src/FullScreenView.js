import './styles/FullScreenView.css';
import React from 'react';
//import React, { useEffect, useState } from "react";
//import { SlideShowData } from './SlideShowData.js'

//import Close from '@material-ui/icons/Close';

function FullScreenView (props) {

	/*additionalImgs[0]*/
	/*<img src={props.selectedImg} alt='fullViewItems'></img>
		
	*/
	/* if statement outside return to check if supporting images are available or not
		If not display only the props.selected image.
		if there are, images in additionalImgs then your return() will be different.(kind of like home.js)
		**hint**
		if additionalImgs is available then make sure to add props.selectedImg as an object to additionalImgs.
		this will help because now additionalImgs will have all the images you need as one array/obj

		<FaArrowAltCircleLeft className='left__arrow' onClick={() => prevPic} />
		<FaArrowAltCircleRight className='right__arrow' onClick={() => nextPic} />
		<img src={props.selectedImg} className='slide__image' alt='fullViewItems'></img>
	*/
	const closeFullView = () => props.setSelectedImg(null);
	return (
		<div className='slider' onClick={closeFullView}>
			<img src={props.selectedImg} className='slide__image' alt='fullViewItems'></img>
			
		</div>
	)

}

export default FullScreenView;