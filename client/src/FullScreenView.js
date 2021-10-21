import './styles/FullScreenView.css';
//import React from 'react';
import React, { useEffect, useState } from "react";
//import { SlideShowData } from './SlideShowData.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTimes } from 'react-icons/fa';
import Close from '@material-ui/icons/Close';


function FullScreenView ({ selectedImg, setSelectedImg }) {

	const [additionalImgs, setadditionalImgs] = useState([]);
	const [loadAdditionalImgs, setLoadAdditionalImgs] = useState(false);

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		// Had to make this request a POST because GET does not sent a request with body data
		let fetchSupportingImgs = async (imgToView) => {
				
			let options = {
				method : 'POST',
				headers : {'Content-Type' : "application/json"},
				body : JSON.stringify({'image' : imgToView})
			};
		
			const resp = await fetch('/api/getSupporting', options);
			const imgs = await resp.json();

			//Adding main item image with supportingImages and turning the whole thin into an array.
			let temp = JSON.parse(imgs[0].SupportingImages);
			temp = Object.values(temp);
			temp.unshift(selectedImg);

			setadditionalImgs(temp);
			setLoadAdditionalImgs(true);
			
		}
		fetchSupportingImgs(selectedImg);
	}, [selectedImg]);
	
	const nextSlide = () => {
		let len = additionalImgs.length;

		setCurrent(current === len - 1 ? 0 : current + 1);
		console.log("Crr " + current);
	}
	const prevSlide = () => {
		
		let len = additionalImgs.length;
		
		if (current === 0)
			setCurrent(len - 1);
		else
			setCurrent(current - 1);
		console.log("Crr " + current);
		
	}

	const closeFullView = () => setSelectedImg(null);
	
	return (
		
		<section className='slider'>
			<FaTimes className='close__icon' onClick={closeFullView}/>
			<FaArrowAltCircleLeft className='left__arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right__arrow' onClick={nextSlide}/>
			<img src={selectedImg} className='slide__image' alt='fullViewItems'></img>
			
		</section>
	)

}

export default FullScreenView;