import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import './_scroll.scss';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'

	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button className='scrollButton'>
  <FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</button>
);
}

export default ScrollButton;
