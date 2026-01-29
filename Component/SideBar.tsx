

"use client";

import { Accordion, AccordionItem, Checkbox, Slider } from "@heroui/react";
import React from "react";

const SideBar = () => {
  const filters = [
  { id: "price", label: "Select Price Range" },
  { id: "brand", label: "Select Brand" },
  
];

  return (
    <div>
      <div className="  w-full h-screen p-4 ">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

    <Accordion >
       
      <AccordionItem
        key={1}
        aria-label="Select Price Range"
        
        title="Select Price Range"
      >
     <Slider
      className="max-w-md"
      defaultValue={[100, 500]}
      formatOptions={{style: "currency", currency: "USD"}}
      label="Price Range"
      maxValue={1000}
      minValue={0}
      step={50}
    />

      </AccordionItem>

      <AccordionItem
        key={2}
        aria-label="Select Brand"
        
        title="Select Brand"
      >
       <div className="flex flex-col gap-4">
      <Checkbox defaultSelected color="default">
        Default
      </Checkbox>
      <Checkbox defaultSelected color="primary">
        Primary
      </Checkbox>
      <Checkbox defaultSelected color="secondary">
        Secondary
      </Checkbox>
      <Checkbox defaultSelected color="success">
        Success
      </Checkbox>
      <Checkbox defaultSelected color="warning">
        Warning
      </Checkbox>
      <Checkbox defaultSelected color="danger">
        Danger
      </Checkbox>
    </div>
      </AccordionItem>
      
        
    </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
