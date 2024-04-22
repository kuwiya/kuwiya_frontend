import React from "react";
import { Link } from "react-router-dom";
import { Clock, Star } from "../../../pages/marketplace/_components";
import { useHref } from "react-router-dom";

const CouponCard = ({ detail }) => {
  const pathName = useHref();

  return (
    <>
      <div className="hidden md:block">
        <Link to={`/coupon/${detail.id}`} className="flex relative">
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
          <div className="flex w-auto">
            <div
              className={`flex-[70%] flex gap-2 lg:gap-4 items-center rounded-l-xl  ${"bg-gradient-to-r from-[#101010] from-[0%] to-[#101010] to-[100%] text-white"}`}
            >
              <div
                className={`ml-7 lg:ml-8 lg:text-xl font-semibold flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#FFFFFF] text-white rounded-xl py-4 px-1 lg:px-0`}
              >
                <h1 className="-rotate-90">{detail.couponNum}</h1>
                <span className={`bg-[#FFFFFF] h-2 w-0.5`}></span>
                <h1 className="-rotate-90">{detail.couponCode}</h1>
              </div>
              <span className="h-full border-[1px] border-white border-dashed"></span>
              <div className="py-3 space-y-0">
                <p className="flex gap-2 items-center text-[11px] lg:text-sm">
                  <img
                    src={detail.restLogo}
                    alt=""
                    className="w-4 md:w-[18px] lg:w-[30px]"
                  />{" "}
                  <span>{detail.restName}</span>
                </p>
                <h2 className="text-[13px] lg:text-base font-medium">
                  {detail.mealName}
                </h2>
                <div className="space-y-1 text-[11px] lg:text-sm">
                  <div className="flex gap-3 items-center">
                    <p className="">₦{detail.originalPrice}</p>
                    <p className={`bg-[#FFFFFF] h-3 lg:h-5 w-[1px]`}></p>
                    <p className="">
                      ₦{detail.priceOff}{" "}
                      <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                        off
                      </sup>
                    </p>
                  </div>
                  <p
                    className={`text-[#FFFFFF] text-[10px] lg:text-sm font-medium`}
                  >
                    {detail.mealInfo}
                  </p>
                  <div className="flex gap-3 md:items-center text-[11px] lg:text-sm">
                    <p className="flex gap-1 items-center md:justify-between">
                      <span className="hidden lg:block">
                        <Clock fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        <Clock fillColor={"#FFFFFF"} width={6} height={6} />
                      </span>
                      <span className="whitespace-nowrap">
                        {detail.duration}
                      </span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="hidden lg:block">
                        <Star fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        {" "}
                        <Star fillColor={"#FFFFFF"} width={10} height={6} />
                      </span>
                      <span>{detail.rating}</span>
                      <span>({detail.rating_count})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[30%] relative">
              <img
                src={detail.mealImage}
                className="rounded-r-xl h-full object-cover"
                alt=""
              />
              <span
                className={`absolute top-0 left-0 bg-[#000000] text-white text-[10px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase`}
              >
                #{detail.priceOff} off
              </span>
            </div>
          </div>
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
        </Link>
      </div>
      <div className="md:hidden h-[124px]">
        <Link to={`/coupon/${detail.id}`} className="flex relative">
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
          <div className="flex w-auto h-[124px]">
            <div
              className={`flex-[70%] flex gap-3 lg:gap-4 items-center rounded-l-xl bg-gradient-to-r from-[#101010] from-[0%] to-[#101010] to-[100%] text-white`}
            >
              <div
                className={`ml-5 lg:ml-8 lg:text-xl font-semibold flex flex-col gap-1 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#FFFFFF] text-white rounded-xl py-4 `}
              >
                <h1 className="-rotate-90">{detail.couponNum}</h1>
                <span className={`bg-[#FFFFFF] h-2 w-0.5`}></span>
                <h1 className="-rotate-90">{detail.couponCode}</h1>
              </div>
              <span className="h-full border-[1px] border-white border-dashed"></span>
              <div className="py-3 pl-0.4 pr-3 space-y-0.5">
                <p className="flex gap-2 items-center text-[11px] lg:text-sm">
                  <img
                    src={detail.restLogo}
                    alt=""
                    className="w-4 md:w-[18px] lg:w-[30px]"
                  />{" "}
                  <span>{detail.restName}</span>
                </p>
                <h2 className="text-[13px] lg:text-base font-medium">
                  {detail.mealName}
                </h2>
                <div className="space-y-1 text-[11px] lg:text-sm">
                  <div className="flex gap-3 items-center">
                    <p className="">₦{detail.originalPrice}</p>
                    <p className={`bg-[#FFFFFF] h-3 lg:h-5 w-[1px]`}></p>
                    <p className="">
                      ₦{detail.priceOff}{" "}
                      <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
                        off
                      </sup>
                    </p>
                  </div>
                  <p
                    className={`text-[#FFFFFF] text-[10px] lg:text-sm font-medium}`}
                  >
                    {detail.mealInfo.length > 50
                      ? detail.mealInfo.slice(0, 50) + "..."
                      : detail.mealInfo}
                  </p>
                  <div className="flex gap-1 items-center text-[11px]">
                    <p className="flex gap-1 items-center md:justify-between">
                      <span className="hidden lg:block">
                        <Clock fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        <Clock fillColor={"#FFFFFF"} width={9} height={9} />
                      </span>
                      <span className="whitespace-nowrap">
                        {detail.duration}
                      </span>
                    </p>
                    <p className={`bg-[#FFFFFF] h-2 w-[0.5px] `}></p>
                    <p className="flex gap-1 items-center">
                      <span className="hidden lg:block">
                        <Star fillColor={"#FFFFFF"} />
                      </span>
                      <span className="lg:hidden">
                        {" "}
                        <Star fillColor={"#FFFFFF"} width={9} height={9} />
                      </span>
                      <span>{detail.rating}</span>
                      <span>({detail.rating_count})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[30%] relative">
              <img
                src={detail.mealImage}
                className="rounded-r-xl h-[124px] object-cover"
                alt=""
              />
              <span
                className={`absolute top-0 left-0 bg-[#000000] text-white text-[10px] lg:text-[13px] w-fit p-1 md:p-2 lg:p-3 pr-3 md:pr-5 lg:pr-8 rounded-r-2xl mt-2 uppercase`}
              >
                #{detail.priceOff} off
              </span>
            </div>
          </div>
          <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
        </Link>
      </div>
    </>
  );
};

// const CouponCard = ({ detail, claim }) => {
//   return (
//     <Link to={`/coupon/${detail.id}`} className="flex relative">
//     <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -left-5 -translate-y-[50%]"></div>
//     <div className="flex w-auto">
//       <div
//       style={{ background: claim && "#000" }}
//        className={` flex ${
//         detail && "lg:flex-[70%] gap-2 lg:gap-4"
//       } items-center rounded-l-xl ${
//         !claim
//           ? "bg-gradient-to-r from-[#FBD199] from-[0%] to-[#E18000] to-[100%] text-black"
//           : "text-primary gap-4"
//       } `}
//       >
//        <div
//             className={`lg:ml-8 ml-6 text-2xl ${
//               detail && "lg:text-xl text-[11px]"
//             } font-semibold text-[#ffffff] flex flex-col gap-0 lg:gap-2 justify-between items-center border-[1.5px] border-dashed border-[#000000] lg:rounded-xl ${
//               detail && "rounded-2xl p-1 lg:py-5"
//             } py-2`}
//           >
//           <h1 className="-rotate-90">{detail.couponNum}</h1>
//           <span
//             className={`${claim ? "bg-primary" : "bg-[#000000]"} h-2 w-0.5`}
//           ></span>
//           <h1 className="-rotate-90">{detail.couponCode}</h1>
//         </div>
//         <span className="h-full border-[1px] border-white border-dashed"></span>
//         <div className="py-3 space-y-0">
//           <p className="flex gap-2 items-center text-[11px] lg:text-sm">
//             <img
//               src={detail.restLogo}
//               alt=""
//               className="w-4 md:w-[18px] lg:w-[30px]"
//             />{" "}
//             <span>{detail.restName}</span>
//           </p>
//           <h2 className="text-[13px] lg:text-base font-medium">
//             {detail.mealName}
//           </h2>
//           <div className="space-y-1 text-[11px] lg:text-sm">
//             <div className="flex gap-3 items-center">
//               <p className="">₦{detail.originalPrice}</p>
//               <p
//                className={`${
//                     claim ? "bg-primary h-5 w-[0.1rem]" : "bg-[#000000]"
//                   } ${detail && "h-3 w-[0.1rem]"}`}
//               ></p>
//               <p className="">
//                 ₦{detail.priceOff}{" "}
//                 <sup className="text-[7px] lg:text-[8px] font-medium text-white uppercase">
//                   off
//                 </sup>
//               </p>
//             </div>
//             <p
//               className={`${
//                 claim ? "text-primary" : "text-[#00000038]"
//               } font-medium ${detail && "lg:text-[13px] text-[7px]"}`}
//             >
//               {detail.mealInfo}
//             </p>
//             <div className="flex gap-3 md:items-center text-[11px] lg:text-sm">
//               <p className="flex gap-1 items-center md:justify-between">
//                 <span className="hidden lg:block">
//                 <Clock fillColor={`${claim ? "#ffffff" : "#292D32"}`} />
//                 </span>
//                 <span className="lg:hidden">
//                 <Clock
//                       fillColor={`${claim ? "#ffffff" : "#292D32"}`}
//                       width={6}
//                       height={6}
//                     />
//                 </span>
//                 <span className="whitespace-nowrap">{detail.duration}</span>
//               </p>
//               <p className="flex gap-1 items-center">
//                 <span className="hidden lg:block">
//                 <Star fillColor={`${claim ? "#ffffff" : "#292D32"}`} />
//                 </span>
//                 <span className="lg:hidden">
//                   {" "}
//                   <Star
//                       fillColor={`${claim ? "#ffffff" : "#292D32"}`}
//                       width={6}
//                       height={6}
//                     />
//                 </span>
//                 <span>{detail.rating}</span>
//                 <span>({detail.rating_count})</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" relative">
//         <img
//           src={detail.mealImage}
//           className="rounded-r-xl h-full object-cover"
//           alt=""
//         />
//        <span
//             className={`absolute top-[10px] left-0 ${
//               detail && "lg:text-[13px] text-[5px]"
//             } ${
//               claim ? "bg-[#000000]" : "bg-[#3187FA]"
//             } text-white w-fit lg:p-3 p-2 lg:pr-8 pr-5 rounded-r-2xl mt-2 uppercase`}
//           >
//             {!claim && "₦"} {detail.priceOff}
//             {claim && "%"} off
//           </span>
//       </div>
//     </div>
//     <div className="w-8 h-7 md:w-10 md:h-10 rounded-full bg-white absolute top-[50%] -right-5 -translate-y-[50%]"></div>
//   </Link>
//   );
// };

export default CouponCard;
