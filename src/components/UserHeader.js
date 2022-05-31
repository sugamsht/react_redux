import React from 'react';
import { connect } from 'react-redux';

function UserHeader(props) {
    return (
        <div>
            {props.user ? <h3>{props.user.name}</h3> : null}
        </div>
    );
}


const mapStateToProps = (state, ownProps) => { //ownprops is the props that are passed to the component
    return {
        // userId: ownProps.userId,
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);