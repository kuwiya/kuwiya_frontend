import React from "react";

function AverageStarRating({ ratings }) {
  // Calculate the average rating from all users
  const totalRatings = ratings.length;
  const sumRatings = ratings.reduce((acc, rating) => acc + rating, 0);
  const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  // Generate an array of stars
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  if (halfStar === 1) {
    stars.push(<span key="half">&#9734;</span>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty${i}`}>&#9734;</span>);
  }

  return (
    <div className="font-work-sans flex items-center gap-1">
      {/* <div>
        {stars.map((star, index) => (
          <span className="text-darkyellow" key={index}>
            {star}
          </span>
        ))}
      </div> */}
      <p className="text-xs">{averageRating.toFixed(1)}</p>
    </div>
  );
}
export default AverageStarRating;

/* <div>
  {[1, 2, 3, 4, 5].map((value) => (
    <span
      key={value}
      onClick={() => handleRatingChange(value)}
      style={{ cursor: "pointer", color: value <= rating ? "gold" : "gray" }}
    >
      &#9733;
    </span>
  ))}
</div>; */
