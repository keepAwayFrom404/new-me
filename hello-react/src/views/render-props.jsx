import React from 'react';

const Cat = ({ target }) => {
  return (<div>{target}</div>)
}

class DataProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      target: 'Zac'
    }
  }
  render() {
    return (
      <div>{this.props.render(this.state)}</div>
    )
  }
}

const RenderProps = (props) => {
  return <DataProvider render={(data) => (
    <Cat target={data.target}></Cat>
  )}></DataProvider>
}

export default RenderProps