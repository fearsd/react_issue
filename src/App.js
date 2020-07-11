import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '12'
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  
  render() {
    return(
      <input type="number" step="0.01" name="inp" value={this.state.value} onInput={(e) => this.handleChange(e)}/>
    )
  }
}
export default App;
