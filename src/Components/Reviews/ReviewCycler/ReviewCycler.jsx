import React, {useState, useEffect} from 'react';
import './ReviewCycler.css';

function ReviewCycler() {

    const listOfReviews = [
        `"This auto shop is all about family. They treat you like one of their own and make sure your car is running smooth as ever. Respect."`,
        `"The crew here knows their stuff. They got my car tuned up in no time, and it's running like a dream. Highly recommend these guys."`,
        `"I had an awesome experience at this shop. The mechanics are real pros, and they got my ride back to peak performance. Great service and friendly staff!"`,
        `"This shop is my go-to for any car issues. The staff is super friendly and explains everything clearly. They always take good care of my car."`,
        `"Man, this shop is top-notch! They fixed up my car faster than I could finish a burger. Great service, no BS. Check 'em out!"`,
        `"These guys are legit. They know cars inside and out. Got my car running better than ever, and the prices are fair. Definitely worth a visit."`,
        `"Cool place with a chill vibe. The mechanics are skilled, and they handled my car with care. Plus, the waiting area is comfortable with a well stocked vending machine."`
    ]

    const listOfReviewAuthors = [
        "-Dominic Toretto",
        "-Brian O'Conner",
        "-Letty Ortiz",
        "-Mia Toretto",
        "-Roman Pearce",
        "-Tej Parker",
        "-Han Lue"
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

        const intervalId = setInterval(updateIndex, 5000);

        return () => clearInterval(intervalId);

    }, [listOfReviews.length]);

  return (
    <div id='review-cycler-container'>
        <p id='fast-reviews' className={`fade ${show ? 'show' : ''}`}>{listOfReviews[currentIndex]}</p>
        <p id='fast-review-authors' className={`fade ${show ? 'show' : ''}`}>{listOfReviewAuthors[currentIndex]}</p>
    </div>
  )
}

export default ReviewCycler;