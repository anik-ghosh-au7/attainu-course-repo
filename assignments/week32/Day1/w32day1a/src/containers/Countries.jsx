import React from "react";
import { connect } from "react-redux";
import CountryList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";

const Countries = ({ detail_data }) => {
  return detail_data.details.length !== 0 ? (
    <CountryDetails />
  ) : (
    <CountryList />
  );
};

const mapStateToProps = (state) => {
  return {
    detail_data: state.detail_data,
  };
};

export default connect(mapStateToProps)(Countries);
