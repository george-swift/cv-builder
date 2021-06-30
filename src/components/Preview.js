import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';
import GenerateTemplate from './utilities/Template';

const Preview = ({ data }) => (
  <div className="preview p-4">
    <div className="py-3">
      <GenerateTemplate data={data} />
    </div>
    <div className="d-flex justify-content-center">
      <Link
        to="/editor"
        className="btn btn-outline-teal previous"
      >
        <span className="me-2">Edit Template</span>
        <FaEdit />
      </Link>
    </div>
  </div>
);

Preview.propTypes = {
  data: PropTypes.shape({
    personalInfo: PropTypes.objectOf(PropTypes.string.isRequired),

    experience: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,

    education: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired),
    ).isRequired,
  }).isRequired,
};

export default Preview;
