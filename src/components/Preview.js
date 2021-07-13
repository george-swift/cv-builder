import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import GenerateTemplate from './utilities/Template';
import BuildContext from '../helpers/BuildContext';

const Preview = () => {
  const { state: data } = useContext(BuildContext);

  return (
    <div className="preview p-4">
      <div className="py-3">
        <GenerateTemplate data={data} />
      </div>
      <div className="d-flex justify-content-center">
        <Link
          to="/editor"
          className="btn btn-outline-teal center"
        >
          <span className="me-2">Edit Template</span>
          <FaEdit />
        </Link>
      </div>
    </div>
  );
};

export default Preview;
