import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[76vh] bg-black">
      <h1 className="text-6xl font-bold text-white">Oops!</h1>
      <p className="mt-4 text-2xl font-medium text-white">
        404 - PAGE NOT FOUND
      </p>
      <p className="mt-2 text-lg text-white">
        The page you are looking for might have been removed <br />
        or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
