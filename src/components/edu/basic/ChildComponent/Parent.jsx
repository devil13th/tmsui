import React from 'react'
import ChildrenComponent from './Children'
import Title from './Title'
class Parent extends React.Component {
  state = {
    a: 1,
  }

  render() {
    const cc = (
      <div key={'z'} style={{ border: '1px solid red' }}>
        ChildRen
      </div>
    )
    return (
      <div>
        Parent
        <ChildrenComponent children="123456" key={'y'}>
          <ul>
            <li key={'1'}>1</li>
            <li key={'2'}>1</li>
            <li key={'3'}>1</li>
          </ul>
          <Title title="1234" key={'a'}></Title>
          <Title title="456" key={'b'}></Title>
        </ChildrenComponent>
        <ChildrenComponent children={[cc]} key={'x'}></ChildrenComponent>
      </div>
    )
  }
}

export default Parent
