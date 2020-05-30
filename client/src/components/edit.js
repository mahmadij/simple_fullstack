import React from 'react'
import {connect} from 'react-redux'

const EditPage = (props) =>{
    console.log(props);
    
        return(
            <div>
                Edit the element with id of {props.count}
            </div>
        )
    
}

const ConnectedEditPage = connect((state) => {
    return {
        count:state.count
    }
})(EditPage);

export default ConnectedEditPage;