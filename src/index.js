import React from 'react';
import { render } from 'react-dom';
import { Select, Option } from 'react-pipestyle';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 'panda',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      selected: e.target.value,
    });
  }
  render() {
    const { selected } = this.state;
    const { handleChange } = this;
  
    return(
      <div>
        <Select value={selected} onChange={handleChange}>
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="panda">Panda</Option>
          <Option value="iguana">Iguana</Option>
        </Select>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
