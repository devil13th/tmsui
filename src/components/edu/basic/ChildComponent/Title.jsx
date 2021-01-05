import React from 'react';

class Title extends React.Component{
    state = {
        a:1
    }

    render(){
        console.log(this.props)
        return (
            <div>[{this.props.title}]</div> 
        )
    }
}

export default Title;