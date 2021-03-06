import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
	return (
		<React.Fragment>
			<hr />
			{Object.values(props.postList).map((post) => {
				return (
					<Post
						title={post.title}
						message={post.message}
						timestamp={post.timestamp}
						username={post.username}
						upvotes={post.upvotes}
						downvotes={post.downvotes}
						id={post.id}
						key={post.id}
						whenClickingUpVote={props.onClickingUpVote}
						whenClickingDownVote={props.onClickingDownVote}
						whenPostClicked={props.onClickingPost}
					/>
				);
			})}
		</React.Fragment>
	);
}

PostList.propTypes = {
	postList: PropTypes.object,
	onClickingUpVote: PropTypes.func,
	onClickingDownVote: PropTypes.func,
	onClickingPost: PropTypes.func,
};

export default PostList;
