"use client";

import React, { useState } from "react";

import SubComponent from "@/components/ui/SubComponent";

import SortBy from "@/components/views/sortBy";

const Filter = () => {
  return (
    <div className="max-w-[250px] w-full mx-auto  text-gray-600 max-md:w-screen max-md:max-w-full max-md:px-6">
      {/*Wrapper*/}
      <SubComponent //heading 1
        heading="Availability"
        subHeading={["In stock", "Out of stock"]}
      />
      <SubComponent heading="Price" subHeading={null} />{" "}
      {/*this one is for the price range*/}
      <SubComponent heading="Size" subHeading={["COMPACT", "GRANDE", "MIDI"]} />
      <SubComponent heading="Product type" subHeading={["Tote Bag"]} />
      <SortBy
        heading="Sort by"
        subHeading={[
          "Best selling",
          "Alphabetically, A-Z",
          "Alphabetically, Z-A",
          "Price, low to high",
          "Price, high to low",
          "Date, old to new",
          "Date, new to old",
        ]}
      />
    </div>
  );
};

export default Filter;
