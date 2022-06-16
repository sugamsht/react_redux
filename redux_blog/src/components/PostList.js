import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';
import { fetchPostsAndUsers } from '../actions';

function PostList(props) {

    useEffect(() => {
        // props.fetchPosts();
        props.fetchPostsAndUsers();
    }, [])

    console.log(props.posts);

    return (
        <div className='text-2xl mx-[10vw]'>
            {props.posts.map(post => {
                return (
                    <div className='flex items-center gap-5 p-5 border-b-2' key={post.id}>
                        <div className='flex'>
                            <img className='w-10 h-10' src='https://i.pinimg.com/originals/63/76/87/637687681abda298cf4371136aa33765.jpg' alt={post.title} />
                        </div>
                        <div className='flex-col'>
                            <h3 className='font-bold '>{post.title}</h3>
                            <p className='text-xl'>{post.body}</p>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);