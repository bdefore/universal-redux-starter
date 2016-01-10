import React, { Component, PropTypes } from 'react';
import { ingredientsQuery } from '../../actions';
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.dispatch(ingredientsQuery({
      field: 'test'
    }));
  }

  render() {
    return (
    	<div>
        Hello Universal Redux!
        <button onClick={this.onClick}>
          Launch Action
        </button>
      </div>
	);
  }
}

export default connect(state => {
  return {...state}
})(App)
