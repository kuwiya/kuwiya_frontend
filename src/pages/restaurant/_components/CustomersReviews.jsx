import React, { useState } from "react";
import { customersReviews } from "../../../constants";
import StarIcon from "../../homepage/_components/featured_section/_components/featured_card/start_icon";
import { Pagination } from "../../marketplace/_components";

const CustomersReviews = ({ restaurantComments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = screen.width < 768 ? 2 : 4;

  const nPages = Math.ceil(customersReviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = restaurantComments.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  return (
    // <section className="space-y-8">
    //   <div className="grid md:grid-cols-2 gap-6 md:gap-3 lg:gap-6">
    //     {currentReviews.map((review) => (
    //       <div
    //         key={review.id}
    //         className="text-black flex items-center gap-5 bg-white shadow-md p-5 pl-1"
    //       >
    //         <div>
    //           <img src={review.customerImage} alt="" />
    //         </div>
    //         <div className="space-y-2">
    //           <h3 className="uppercase lg::text-xl font-medium">
    //             {review.customerName}
    //           </h3>
    //           <p className="lg:text-base text-xs font-normal">
    //             {review.customerTexts}
    //           </p>
    //           <div className="flex items-baseline gap-1">
    //             <div className="flex">
    //               <span>
    //                 <StarIcon fillColor="#000000" />
    //               </span>
    //               <span>
    //                 <StarIcon fillColor="#000000" />
    //               </span>
    //               <span>
    //                 <StarIcon fillColor="#000000" />
    //               </span>
    //               <span>
    //                 <StarIcon fillColor="#000000" />
    //               </span>
    //               <span>
    //                 <StarIcon fillColor="#000000" />
    //               </span>
    //             </div>
    //             <p className="text-[6px] md:text-[10px] lg:text-sm text-[#000000053]">
    //               {review.rating_count.toFixed(1)}/5.0
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div>
    //     <Pagination
    //       nPages={nPages}
    //       currentPage={currentPage}
    //       setCurrentPage={setCurrentPage}
    //     />
    //   </div>
    // </section>

    // swagger endpoint
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-3 lg:gap-6">
        {currentReviews?.map((review) => (
          <div
            key={review?.user}
            className="text-black flex items-center gap-5 bg-white shadow-md p-5 pl-1"
          >
            <div>
              <img src={review?.profile_image} alt="" />
            </div>
            <div className="space-y-2">
              <h3 className="uppercase lg::text-xl font-medium">
                {review?.user_name_serialized}
              </h3>
              <p className="lg:text-base text-xs font-normal">
                {review?.content}
              </p>
              <div className="flex items-baseline gap-1">
                <div className="flex">
                  <span>
                    <StarIcon fillColor="#000000" />
                  </span>
                  <span>
                    <StarIcon fillColor="#000000" />
                  </span>
                  <span>
                    <StarIcon fillColor="#000000" />
                  </span>
                  <span>
                    <StarIcon fillColor="#000000" />
                  </span>
                  <span>
                    <StarIcon fillColor="#000000" />
                  </span>
                </div>
                {/* <p className="text-[6px] md:text-[10px] lg:text-sm text-[#000000053]">
                  {review.rating_count.toFixed(1)}/5.0
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default CustomersReviews;
