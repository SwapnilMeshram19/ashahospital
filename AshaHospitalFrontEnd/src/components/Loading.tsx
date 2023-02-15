import * as React from 'react';
export const Loading = () => {
    return (
        <div className="flex justify-center items-center mt-10">
        <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-blue-800" role="status">
        </div>
      </div>
    )
}