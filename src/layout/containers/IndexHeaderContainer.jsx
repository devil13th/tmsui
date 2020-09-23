import React from 'react';
import { connect } from 'react-redux';
import IndexHeader from '@/layout/components/IndexHeader';


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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexHeader)