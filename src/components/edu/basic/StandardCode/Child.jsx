import React from 'react'
import PropTypes from 'prop-types'
class Child extends React.Component {
  state = {}

  //对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired, //限制name必传，且为字符串
    age: PropTypes.number, //限制age为数值
    person: PropTypes.object,
    speak: PropTypes.func, //限制speak为函数
    changeName: PropTypes.func,
  }

  //指定默认标签属性值
  static defaultProps = {
    age: 18, //age默认值为18
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc' }}>
        I'm Child <br />
        <button onClick={this.props.speak}>Speak </button>
        <button
          onClick={() => {
            this.props.changeName(Math.random())
          }}
        >
          change name
        </button>
      </div>
    )
  }
}

export default Child
