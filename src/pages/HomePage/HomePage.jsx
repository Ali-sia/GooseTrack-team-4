import React, { useState } from "react";
import FeatureList from "../../components/FeatureList/FeatureList";
import Reviews from "../../components/Reviews/Reviews";

function HomePage() {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <FeatureList />
      <button onClick={toggleReviews}>Toggle Reviews</button>
      {showReviews && <Reviews />}
    </div>
  );
}

export default HomePage;
