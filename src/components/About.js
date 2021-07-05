import React from 'react';
import { Link } from 'react-router-dom';
import { FaDoorOpen } from 'react-icons/fa';
import Resume from '../assets/markus-winkler.jpg';

const About = () => (
  <div className="card shadow">
    <div className="card-header p-2 text-center fw-bold">
      CV Builder
    </div>
    <img src={Resume} alt="resume template" className="w-100" />
    <div className="card-body px-4">
      <p>
        Welcome! To generate a preview, kindly fill out
        the necessary details. Click on the descriptively named buttons
        to add and delete sections to and from any category.
        This application is built with React and Bootstrap.
      </p>
      <Link
        to="/editor"
        className="btn btn-outline-teal w-100 wrapper"
      >
        <span className="me-2">GET STARTED</span>
        <FaDoorOpen />
      </Link>
    </div>
  </div>
);

export default About;
