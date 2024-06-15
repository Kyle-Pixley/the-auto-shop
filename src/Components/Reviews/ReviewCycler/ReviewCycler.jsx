import React, {useState, useEffect} from 'react';
import './ReviewCycler.css';

function ReviewCycler() {

    const listOfReviews = [
        // 0
        `"This auto shop is all about family. They treat you like one of their own and make sure your car is running smooth as ever. Respect."`,
        // 1
        `"Take chances, make mistakes, and get messy, but not with your car! The mechanics got us back on the road in no time. They made sure our next field trip is as smooth as possible."`,
        // 2
        `"Ruh-roh! The mystery Machine was acting up, but these guys fixed it right up! The mechanics knew exactly what to do to get my ride back to hunting ghosts!"`,
        // 3
        `"The crew here knows their stuff. They got my car tuned up in no time, and it's running like a dream. Highly recommend these guys."`,
        // 4
        `"Man, this shop is top-notch! They fixed up my car faster than I could finish a burger. Great service, no BS. Check 'em out!"`,
        // 5 
        `"It's not who you are underneath, it's what you drive that defines you, and these guys are skilled, reliable and efficient mechanics."`,
        // 6
        `"As leader of the Autobots, I place great trust in this auto shop. Their mechanics possess unparalleled skill, ensuring that the Autobots are always ready to Roll-Out!"`
    ]

    const listOfReviewAuthors = [
        // 0
        "-Dominic Toretto",
        // 1
        "Ms. Fizzle",
        // 2
        "-Scooby Doo",
        // 3
        "-Brian O'Conner",
        // 4
        "-Roman Pearce",
        // 5
        "-Batman",
        // 6
        "-Optimus Prime"
    ]

    const listOfReviewAuthorCars = [
        // 0
        "1970 Dodge Charger R/T",
        // 1
        "The Magic Schoolbus",
        // 2 
        "1977 Volkswagen Transporter",
        // 3
        "1999 Nissan Skyline R34 GT-R",
        // 4
        "2003 Mitsubishi Eclipse Spyder GTS",
        // 5
        "The Tumbler",
        // 6
        "Peterbilt 379"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const updateIndex = () => {
            setShow(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % listOfReviews.length);
                setShow(true);
            }, 1000);
        };

        const intervalId = setInterval(updateIndex, 7000);

        return () => clearInterval(intervalId);

    }, [listOfReviews.length]);

  return (
    <div id='review-cycler-container'>
        <p id='fast-reviews' className={`fade ${show ? 'show' : ''}`}>{listOfReviews[currentIndex]}</p>
        <p id='fast-review-authors' className={`fade ${show ? 'show' : ''}`}>{listOfReviewAuthors[currentIndex]}</p>
        <p id='fast-review-authors-cars' className={`fade ${show ? 'show' : ''}`}>{listOfReviewAuthorCars[currentIndex]}</p>
    </div>
  )
}

export default ReviewCycler;