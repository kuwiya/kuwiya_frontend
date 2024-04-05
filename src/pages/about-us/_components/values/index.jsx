import React from "react";
import { value1, value2, value3, value4, value5, value6 } from '../../../../constants/images'

const Values = () => {
  return (
    <div className=" py-28">
      <div className="flex flex-col text-center mx-auto px-40">
        <h2 className="font-semibold text-[28px] uppercase pb-20">
          core values
        </h2>
        <table className="table-fixed w-full">
          <tbody className="w-full relative">
            <div className="bg-black w-[1px] opacity-20 p-[1px] h-full mx-auto absolute left-0 right-0" />
            <tr>
              <td className="p-6">
                <img src={value1} alt="creativity" className="ml-6" />
                <div className="font-medium text-[23px] text-start pb-4">
                  Innovation
                </div>
                <div className="font-normal text-[19px] text-start">
                  We embrace innovation in all aspects of our operations,
                  continuously seeking new ways to enhance the user experience
                  and deliver value to our community.
                </div>
              </td>
              <td className="p-6">
              <img src={value2} alt="" className="ml-10"  />
                <div className="font-medium text-[23px] text-start capitalize pb-4">
                  community
                </div>
                <div className="font-normal text-[19px] text-start">
                  We foster a sense of belonging and collaboration within our
                  community, encouraging food enthusiasts and restaurant owners
                  to come together, share their passion for good food, and
                  support one another.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <hr className="bg-black w-full opacity-20 p-[1px] h-full" />
              </td>
              <hr className="bg-black w-full opacity-20 p-[1px] h-full" />
            </tr>

            <tr>
              <td className="p-6">
              <img src={value3} alt="" className="ml-10"  />
                <div className="font-medium text-[23px] text-start capitalize pb-4">
                  accessibility
                </div>
                <div className="font-normal text-[19px] text-start">
                  We believe that everyone should have access to affordable
                  dining experiences, and we work tirelessly to make discounts
                  and promotions easily accessible to all.
                </div>
              </td>
              <td className="p-6">
              <img src={value4} alt="" className="ml-6"  />
                <div className="font-medium text-[23px] text-start capitalize pb-4">
                  integrity
                </div>
                <div className="font-normal text-[19px] text-start">
                  We uphold the highest standards of integrity and transparency
                  in everything we do, ensuring that our users and partners can
                  trust us to deliver accurate information and fair deals.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <hr className="bg-black w-full opacity-20 p-[1px] h-full" />
              </td>
              <hr className="bg-black w-full opacity-20 p-[1px] h-full" />
            </tr>
            <tr>
              <td className="p-6">
              <img src={value5} alt="" className="ml-10"  />
                <div className="font-medium text-[23px] text-start capitalize pb-4">
                  accessibility
                </div>
                <div className="font-normal text-[19px] text-start">
                  We empower both consumers and businesses by providing them
                  with the tools, resources, and opportunities they need to make
                  informed decisions and achieve their goals.
                </div>
              </td>
              <td className="p-6">
              <img src={value6} alt="" className="ml-10"  />
                <div className="font-medium text-[23px] text-start capitalize pb-4">
                  sustainability
                </div>
                <div className="font-normal text-[19px] text-start">
                  We are committed to promoting sustainable practices within the
                  food industry, partnering with eco-conscious restaurants and
                  encouraging responsible consumption habits among our community
                  members.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Values;