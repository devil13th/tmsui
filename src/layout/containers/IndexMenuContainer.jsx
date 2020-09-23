import React from 'react';
import { connect } from 'react-redux';
import IndexMenu from '@/layout/components/IndexMenu';


const mapStateToProps = state => {
  return {
    state: state.indexData,
    collapsed: state.indexData.collapsed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggle: () => {
      dispatch({type:'toggle',payload:{}})
    },
    setState:(payload) => {
      dispatch({type:'setState',payload:{...payload}})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexMenu)