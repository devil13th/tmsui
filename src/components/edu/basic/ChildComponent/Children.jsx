import React from 'react';

class Children extends React.Component{
    state = {
        a:1
    }

    render(){
        console.log(this.props)
        return (
            <div>{[...this.props.children]}</div> 
        )
    }
}

export default Children;