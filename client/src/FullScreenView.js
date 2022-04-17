import './styles/FullScreenView.css';
//import React from 'react';
import React, { useEffect, useState } from "react";
//import { SlideShowData } from './SlideShowData.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTimes } from 'react-icons/fa';
//import Close from '@material-ui/icons/Close';


function FullScreenView ({ selectedImg, setSelectedImg }) {

	const [additionalImgs, setadditionalImgs] = useState([]);
	const [loadAdditionalImgs, setLoadAdditionalImgs] = useState(false);//eslint-disable-line

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

		if (current === (len -1))
			setCurrent(0);
		else
			setCurrent(current + 1);
	}
	const prevSlide = () => {

		let len = additionalImgs.length;

		if (current === 0)
			setCurrent(len - 1);
		else
			setCurrent(current - 1);
	}

	const closeFullView = () => {
		setSelectedImg(null);
		setadditionalImgs(null);
		//console.log("Close Called");
		
	}
	//<img src={selectedImg} className='slide__image' alt='fullViewItems'></img>
	return (
		
		<section className='slider'>
			<FaTimes className='close__icon' onClick={closeFullView} />
			<FaArrowAltCircleLeft className='left__arrow' onClick={prevSlide} />
			<FaArrowAltCircleRight className='right__arrow' onClick={nextSlide}/>
			{additionalImgs.map((pic, index) => {
				//console.log("Index is " + index )
				return (
					<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && (
							<img src={pic} alt='item here' className='slide__image' />
						)}
					</div>
				)
			})
			}
			
		</section>
	);

}

export default FullScreenView;