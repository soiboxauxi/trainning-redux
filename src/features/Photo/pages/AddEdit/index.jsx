import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-">
      <Banner title="Pick your amazing photo 🥇" />
      <div className="photo-edit__form"></div>
    </div>
  );
}

export default AddEditPage;
