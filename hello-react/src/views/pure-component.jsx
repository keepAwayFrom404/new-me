import React from 'react';

class Text extends React.Component<any,any>{
  render(){
      console.log(this.props)
      return <div>hello,wrold</div>
  }
}
class Index extends React.Component<any,any>{
  state={
      data:{ a : 1 , b : 2 }
  }
  handerClick=()=>{
      const { data } = this.state
      data.a++
      this.setState({ data })
  }
  render(){
      const { data } = this.state
      return <div>
          <button onClick={ this.handerClick } >点击</button>
          <Text data={data} />
      </div>
  }
}

export default Index