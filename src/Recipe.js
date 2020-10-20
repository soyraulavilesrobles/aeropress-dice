import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

const COFFEE_WATER_RATIOS = [
  { coffee: 23, water: 200 },
  { coffee: 18, water: 250 },
  { coffee: 15, water: 250 },
  { coffee: 12, water: 200 }
];

const GRIND_BREWTIME_RATIOS = [
];

const BLOOM_SECONDS = [20, 30, 40];
const BLOOM_WATER_G = [30, 60];
const BREW_TEMP_C = [80, 85, 90, 95];
const CLOCKWISE_STIR_TIMES = [0, 1, 2];

function randomElement(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function formatTimeEnglish(times) {
  if (times === 1) {
    return 'once';
  } else {
    return '' + times + ' times';
  }
}

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      started: false,
      inverted: false,
      bloomSeconds: BLOOM_SECONDS[0],
      bloomWaterG: BLOOM_WATER_G[0],
      brewTempC: BREW_TEMP_C[0],
      coffeeWaterRatio: COFFEE_WATER_RATIOS[0],
      grindBrewTime: GRIND_BREWTIME_RATIOS[0],
      clockwiseStirTimes: CLOCKWISE_STIR_TIMES[0],
      anticlockwiseStir: true,
    };
  }

  handleClick() {
    this.setState({ started: false });
    this.timer = setTimeout(_ => {
      this.setState({
        started: true,
        inverted: randomElement([true, false]),
        bloomSeconds: randomElement(BLOOM_SECONDS),
        bloomWaterG: randomElement(BLOOM_WATER_G),
        brewTempC: randomElement(BREW_TEMP_C),
        coffeeWaterRatio: randomElement(COFFEE_WATER_RATIOS),
        grindBrewTime: randomElement(GRIND_BREWTIME_RATIOS),
        clockwiseStirTimes: randomElement(CLOCKWISE_STIR_TIMES),
        anticlockwiseStir: randomElement([true, false]),
      })}, 400);
  }

  renderHeatWaterStep() {
    return <li>
      <strong>{toFahrenheit(this.state.brewTempC)}°F</strong>.
    </li>;
  }

  renderGrindCoffeeStep() {
    return <li>
    </li>;
  }

  renderPourCoffeeStep() {
    return <li>
    </li>;
  }

  renderInvertStep() {
    if (this.state.inverted) {
    } else {
    }
  }

  renderBloomStep() {
    if (this.state.bloomWaterG > 0) {
      return <li>
      </li>;
    }
  }

  renderAddWaterStep() {
    if (this.state.bloomWaterG > 0) {
      return <li>
      </li>;
    } else {
      return <li>
      </li>;
    }
  }

  renderBrewStep() {
    return <li>
    </li>;
  }

  renderStirStep() {
    if (this.state.clockwiseStirTimes > 0) {
      let instruction = ''
      if (this.state.anticlockwiseStir) {
      }
      return <li>
        { instruction }
      </li>
    }
  }

  renderEndInvertStep() {
    if (this.state.inverted) {
      return <li>
      </li>
    }
  }

  renderRecipe() {
    if (this.state.started) {
      return <ol key="k">
        { this.renderHeatWaterStep() }
        { this.renderGrindCoffeeStep() }
        { this.renderInvertStep() }
        { this.renderPourCoffeeStep() }
        { this.renderBloomStep() }
        { this.renderAddWaterStep() }
        { this.renderStirStep() }
        { this.renderBrewStep() }
        { this.renderEndInvertStep() }
        <li>
          Press.
        </li>
      </ol>;
    }
  }

  render() {
    return (
      <div className="App-recipe">
        <h1>
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
            Generate a Recipe
          </button>
        </h1>
        <div className="card">
          <div className="card-block">
            <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
              { this.renderRecipe() }
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
