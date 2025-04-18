import React, { useEffect, useCallback } from "react"
import PostForm from "./PostForm"
import SinglePost from "./SinglePost"
import { connect, useDispatch } from "react-redux"
import { loadPostsDispatch } from "../../redux/post/postActions"
import {
  loadLikesDispatch,
  removeLikesDispatch,
  addLikeDispatch,
} from "../../redux/likes/likesActions"
import {
  loadDislikeDispatch,
  removeDislikeDispatch,
  addDislikeDispatch,
} from "../../redux/dislikes/dislikesActions"

function PostListing({
  post,
  likes,
  dislikes,
  loadPostsDispatch,
  loadLikesDispatch,
  loadDislikeDispatch,
  removeDislikeDispatch,
  removeLikesDispatch,
  addLikeDispatch,
  addDislikeDispatch,
}) {
  const dispatch = useDispatch()
  const { posts: allPosts } = post
  const { likes: allLikes, userPostsLiked: userLikes } = likes

  const { dislikes: allDislikes, userPostsDislikes: userDislikes } = dislikes

  const getPosts = useCallback(() => {
    dispatch(loadPostsDispatch)
    dispatch(loadLikesDispatch)
    dispatch(loadDislikeDispatch)
  }, [dispatch])

  useEffect(() => {
    getPosts()
  }, [])

  const handleRemoveDislike = (id) => {
    removeDislikeDispatch({ id })
  }

  const handleAddDislike = (id) => {
    addDislikeDispatch({ id })
  }

  const handleRemoveLike = (id) => {
    removeLikesDispatch({ id })
  }

  const handleAddLike = (id) => {
    addLikeDispatch({ id })
  }

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Posts</h1>

        <p className="lead">
          <i className="fas fa-user"></i>Welcome to the community
        </p>
        <div className="post-from">
          <PostForm />

          <div className="posts">
            {allPosts && allPosts.length > 0 ? (
              allPosts.map((post, id) => (
                <>
                  <div className="post bg-white my-1" key={id}>
                    <SinglePost
                      key={id}
                      post={post}
                      likes={allLikes}
                      userLikes={userLikes}
                      dislikes={allDislikes}
                      userDislikes={userDislikes}
                      handleRemoveDislike={handleRemoveDislike}
                      handleRemoveLike={handleRemoveLike}
                      handleAddLike={handleAddLike}
                      handleAddDislike={handleAddDislike}
                    />
                  </div>
                </>
              ))
            ) : (
              <p>Nothing To See Here</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const mapDispatchToProps = {
  loadPostsDispatch,
  loadLikesDispatch,
  loadDislikeDispatch,
  removeDislikeDispatch,
  removeLikesDispatch,
  addLikeDispatch,
  addDislikeDispatch,
}

function mapStateToProps(state) {
  return {
    post: state.posts,
    likes: state.likes,
    dislikes: state.dislikes,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListing)
