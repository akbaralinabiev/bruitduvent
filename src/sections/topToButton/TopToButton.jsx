import React, { useEffect, useState } from 'react';
import top from '../../assets/images/to-top-button.svg';
import './toptobutton.css';

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 650
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Attach the topFunction to the global scope so it can be called
    window.topFunction = topFunction;

    // Clean up the event listener when the component unmounts
    return () => {
      window.onscroll = null;
      window.topFunction = null;
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className='topTo'>
            <button onClick={window.topFunction} id="myBtn" title="Go to top">
          <img src={top} alt="Back to Top" />
        </button>
        </div>
      )}
    </>
  );
};

export default ButtonToTop;
