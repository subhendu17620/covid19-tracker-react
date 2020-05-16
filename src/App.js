import React from "react";
import ReactGA from "react-ga";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    ReactGA.initialize("UA-166847856-1");

    ReactGA.pageview(window.location.pathname);

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <a
          target="__blank"
          href="https://github.com/subhendu17620/covid19-tracker-react"
          className={styles.link}
        >
          find this project on github
        </a>
        <p className={styles.link}>made with ❤️ by subhendu</p>
      </div>
    );
  }
}

export default App;
