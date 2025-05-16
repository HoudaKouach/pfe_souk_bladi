import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="py-3 text-sm">
      <ol className="flex">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <li>
              {index === paths.length - 1 ? (
                <span className="font-medium">{path.name}</span>
              ) : (
                <Link 
                  to={path.path} 
                  className="text-gray-700 hover:underline"
                >
                  {path.name}
                </Link>
              )}
            </li>
            {index < paths.length - 1 && (
              <li className="mx-2">
                <span>{'>'}</span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
