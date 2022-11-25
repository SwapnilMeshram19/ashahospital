import React, { FC } from "react";

interface categoryI {
  name: string;
  id?: number;
}
interface filterCategoryI {
  title: string;
  categories: categoryI[];
}

export const FilterCategory: FC<filterCategoryI> = ({ title, categories }) => {
  return (
    <div>
      <div className="border-t border-gray-200 px-4 py-6">
        <h3 className="-mx-2 -my-3 flow-root">
          <div className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">{title}</span>
            <span className="ml-6 flex items-center"></span>
          </div>
        </h3>
        <div className="scrollbar h-60 overflow-scroll overflow-x-hidden overscroll-contain scroll-smooth pt-6">
          <div className="space-y-5 p-2">
            {categories.map((category, categoryIndx) => (
              <div key={category.name} className="flex items-center">
                <input
                  id={`filter-mobile-${category.id}-${categoryIndx}`}
                  name={`${category.id}[]`}
                  defaultValue={category.name}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={`filter-mobile-${category.id}-${categoryIndx}`}
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
