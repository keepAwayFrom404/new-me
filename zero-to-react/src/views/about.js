import React from 'react';
import { connect } from 'react-redux'
import { getUser } from '../store/actionUser'

function About(props) {
  const { count, user = [], getUser } = props;
  return <div>
    <div>我是about页面:{count}</div>
    <span>我是异步修改数据:{user[0] && user[0].name}</span>
    <button onClick={getUser}>修改</button>
  </div>;
}

function mapStateToProps(state) {
  return {
    user: state.reducer.user,
  };
}

export default connect(mapStateToProps, { getUser })(About);