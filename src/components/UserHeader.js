import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

function UserHeader(props) {

    useEffect(() => {
        props.fetchUser(props.userId);
    }, [])

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

export default connect(mapStateToProps, { fetchUser })(UserHeader);