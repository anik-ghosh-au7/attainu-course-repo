import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button, Loader } from "semantic-ui-react";
import { CLEAR_LIST } from "../redux/reducers/listReducer";
import { CLEAR_DETAILS } from "../redux/reducers/detailsReducer";

export class CountryDetails extends Component {
  returnHandler = () => {
    this.props.clear();
    this.props.return_back();
  };
  render() {
    const { details } = this.props.detail_data;
    // console.log(details);
    return (
      <Wrapper>
        <Button
          content="Back"
          labelPosition="left"
          icon="left arrow"
          onClick={this.returnHandler}
        />
        <div className="ui items">
          <div className="item">
            <div className="ui large image">
              <img src={details.flag} alt="flag_picture" />
            </div>
            <div className="content">
              <div className="header">{details.name}</div>
              <div className="description">
                <div>
                  <span className="description">Native Name: </span>
                  <span className="meta"> {details.nativeName}</span>
                  <br />
                  <span className="description">Population: </span>
                  <span className="meta"> {details.population}</span>
                  <br />
                  <span className="description">Region: </span>
                  <span className="meta"> {details.region}</span>
                  <br />
                  <span className="description">Sub Region: </span>
                  <span className="meta"> {details.subregion}</span>
                  <br />
                  <span className="description">Capital: </span>
                  <span className="meta"> {details.capital}</span>
                  <br />
                  <span className="description">Top Level Domain: </span>
                  <span className="meta"> {details.topLevelDomain}</span>
                  <br />
                  <span className="description">Currencies: </span>
                  {details.currencies.map((currency, idx) => {
                    return (
                      <span className="meta" key={idx}>
                        {" "}
                        {currency.name}{" "}
                      </span>
                    );
                  })}
                  <br />
                  <span className="description">Languages: </span>
                  {details.languages.map((language, idx) => {
                    return (
                      <span className="meta" key={idx}>
                        {" "}
                        {language.name}{" "}
                      </span>
                    );
                  })}
                  <br />
                  <br />
                  <br />
                  <span className="description">Border Countries: </span>
                  {details.borders.map((border, idx) => {
                    return (
                      <span className="meta" key={idx}>
                        {" "}
                        {border}{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 100px;
  margin-right: 100px;
  margin-left: 100px;
`;

const mapStateToProps = (state) => {
  return {
    detail_data: state.detail_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    return_back: () => dispatch({ type: CLEAR_DETAILS }),
    clear: () => dispatch({ type: CLEAR_LIST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
