import React from 'react'

 

const SideBar = () => {
  return (
    <div>
         <div className="w-full p-4 ">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <ul className="space-y-2">
            {["Price Range", "Brand", "Color"].map((item) => (
              <li
                key={item}
                className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-200 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default SideBar