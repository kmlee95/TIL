import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ result, loading, error }) => null;

HomePresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
