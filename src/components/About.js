import React from 'react';
import { Link } from 'react-router-dom';
import { RiQuillPenFill } from 'react-icons/ri';

const About = () => (
  <div className="card shadow">
    <div className="card-header p-2 text-center">
      <h4 className="mb-0">About the CV Builder</h4>
    </div>
    <div className="card-body px-4">
      <p>
        Welcome! To generate a preview, kindly fill out
        the necessary details. Click on the descriptively named buttons
        to add and delete sections to and from any category.
        This application is built with React and Bootstrap.
      </p>
      <Link
        to="/editor"
        className="btn btn-outline-teal w-100"
      >
        <RiQuillPenFill />
        <span className="ms-2">Get Started</span>
      </Link>
    </div>
  </div>
);

export default About;
