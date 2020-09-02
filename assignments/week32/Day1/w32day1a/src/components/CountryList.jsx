import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";
import populateList from "../redux/actions/listAction";
import { CLEAR_LIST } from "../redux/reducers/listReducer";
import { POPULATE_DETAILS } from "../redux/reducers/detailsReducer";

export class CountryList extends Component {
  componentDidMount() {
    this.props.populate_list();
  }

  callPopulate = (event) => {
    this.props.clear();
    this.props.populate_list(event.target.value);
  };

  submitForm = (event) => {
    event.preventDefault();
    // console.log("form value --> ", event.target.search.value);
    this.props.clear();
    this.props.populate_list(
      "",
      event.target.search.value.trim().toLowerCase()
    );
  };

  clickHandler = (country) => {
    this.props.populate_details(country);
  };

  render() {
    // console.log("from props --> ", this.props.list.countries);
    return this.props.list.loading ? (
      <Loader active inline="centered" size="massive" />
    ) : (
      <>
        <Wrapper>
          <LeftDiv>
            {/* <LeftDiv className="ui fluid category search"> */}
            <form onSubmit={this.submitForm}>
              <div className="ui icon input">
                <i className="search icon" />
                <input
                  name="search"
                  className="prompt"
                  type="text"
                  placeholder="Search for a country..."
                />
              </div>
            </form>
          </LeftDiv>

          <RightDiv>
            <select className="ui dropdown" onChange={this.callPopulate}>
              <option value="">Filter by Region </option>
              <option value="africa">Africa</option>
              <option value="americas">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </RightDiv>
        </Wrapper>

        <ImageGrid>
          <Images className="ui centered cards">
            {this.props.list.countries.map((country) => {
              return (
                <Div
                  className="ui card"
                  key={country.nativeName}
                  onClick={() => this.clickHandler(country)}
                >
                  <div className="image">
                    <Image src={country.flag} alt="flag_image" />
                  </div>
                  <div className="content">
                    <h4 className="header">{country.name}</h4>
                    <span className="description">Population: </span>
                    <span className="meta"> {country.population}</span>
                    <br />
                    <span className="description">Region: </span>
                    <span className="meta"> {country.region}</span>
                    <br />
                    <span className="description">Capital: </span>
                    <span className="meta"> {country.capital}</span>
                    <br />
                  </div>
                </Div>
              );
            })}
          </Images>
        </ImageGrid>
      </>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const LeftDiv = styled.div`
  float: left;
  margin-left: 50px;
`;

const RightDiv = styled.div`
  float: right;
  margin-right: 50px;
`;

const ImageGrid = styled.div`
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Images = styled.div`
  justify-content: space-evenly;
`;

const Image = styled.img`
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
`;

const Div = styled.div`
  cursor: pointer;
`;

const mapStateToProps = (state) => {
  return {
    list: state.list_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populate_list: (region = "", country = "") =>
      dispatch(populateList(region, country)),
    clear: () => dispatch({ type: CLEAR_LIST }),
    populate_details: (country) =>
      dispatch({ type: POPULATE_DETAILS, payload: country }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
