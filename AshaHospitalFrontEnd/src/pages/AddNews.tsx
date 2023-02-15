export const AddNews = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="relative mx-8 rounded-3xl bg-white px-4 py-10 shadow sm:p-10 md:mx-0">
          <div className="mx-auto max-w-md">
            <div className="flex items-center space-x-5 self-start pl-2 text-xl font-semibold text-gray-700">
            <h2 className="leading-relaxed">Create an Event</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="space-y-4 py-8 leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">News Title</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-600 focus:border-gray-900 focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Event title"
                  />
                </div>
            
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col w-96">
                    <label className="leading-loose">News Date</label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <input
                        type="date"
                        className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-gray-600 focus:border-gray-900 focus:outline-none focus:ring-gray-500 sm:text-sm"
                        placeholder="25/02/2020"
                      />
                      <div className="absolute left-3 top-2">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">News Description</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-600 focus:border-gray-900 focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <button className="flex w-full items-center justify-center rounded-md px-4 py-3 text-gray-900 focus:outline-none">
                  <svg
                    className="mr-3 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Cancel
                </button>
                <button className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-3 text-white focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
