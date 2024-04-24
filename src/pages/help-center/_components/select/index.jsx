import React, { useState } from "react";

const Select = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select a Category");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = () => {
    setShowDropdown(!showDropdown);
  };
  const categories = [
    {
      id: 0,
      category: "Report abuse",
    },
    {
      id: 1,
      category: "Complain",
    },
    {
      id: 2,
      category: "Support",
    },

    {
      id: 3,
      category: "Suggestions",
    },

    {
      id: 4,
      category: "Customer care",
    },
    {
      id: 5,
      category: "Vendor Help",
    },
    {
      id: 6,
      category: "Help",
    },
    {
      id: 7,
      category: "Partnership",
    },

    {
      id: 8,
      category: "Enquiry",
    },
    {
      id: 9,
      category: "Others",
    },
  ];

  return (
    <div className="">
      <h3
        className="bg-primary  w-[382px] md:w-[550px] lg:w-[650px]  text-black font-medium  text-base flex items-center justify-between p-4 px-10 cursor-pointer rounded-[10px]"
        onClick={handleSelect}
      >
        {selectedCategory}
        <img src={"/dropdown.png"} alt="" />
      </h3>

      {showDropdown && (
        <div className="absolute z-20 lg:bottom-[-35rem] w-[382px] md:w-[550px] lg:w-[650px] flex items-start bg-primary shadow-lg text-black font-medium text-base rounded-[10px] mt-4 py-2 gap-5 overflow-y-auto px-6 flex-col animate-slide_up">
          {categories.map((category) => (
            <span
              key={category.id}
              className="hover:cursor-pointer p-[10px]"
              onClick={() => {
                setSelectedCategory(category.category);
                setShowDropdown(false);
              }}
            >
              {category.category}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
