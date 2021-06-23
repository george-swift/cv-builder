import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from '../utilities/InputGroup';

const PersonalInformation = ({ userInfo, onChange }) => (
  <fieldset className="col-12">
    <legend>Personal Information</legend>
    <div className="row g-3 mb-4">
      <InputGroup
        divClass="col-md-6 form-floating"
        type="text"
        id="FirstName"
        placeholder="John"
        value={userInfo.firstName}
        onChange={(e) => onChange(e)}
      />

      <InputGroup
        divClass="col-md-6 form-floating"
        type="text"
        id="LastName"
        placeholder="Doe"
        value={userInfo.lastName}
        onChange={(e) => onChange(e)}
      />

      <InputGroup
        divClass="col-12 form-floating"
        type="text"
        id="ProfessionalTitle"
        placeholder="Freelancer"
        value={userInfo.professionalTitle}
        onChange={(e) => onChange(e)}
      />

      <InputGroup
        divClass="col-12 form-floating"
        type="email"
        id="EmailAddress"
        placeholder="name@example.com"
        value={userInfo.emailAddress}
        onChange={(e) => onChange(e)}
      />

      <InputGroup
        divClass="col-md-6 form-floating"
        type="text"
        id="PhoneNumber"
        placeholder="+55510000"
        value={userInfo.phoneNumber}
        onChange={(e) => onChange(e)}
      />

      <InputGroup
        divClass="col-md-6 form-floating"
        type="text"
        id="Website"
        placeholder="johndoe.com"
        value={userInfo.website}
        onChange={(e) => onChange(e)}
      />
    </div>
  </fieldset>
);

PersonalInformation.propTypes = {
  userInfo: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PersonalInformation;
