import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-[18%] bg-gray-100 shadow-lg p-2 px-4">
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

      {/* Main Content */}
      <div className="w-[82%] bg-gray-50">
        {children}
      </div>

    </div>
  );
}
