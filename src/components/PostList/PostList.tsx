import React from 'react';
import PostItem, {PostType} from "../PostItem/PostItem";
import s from "./PostList.module.css"


type PropsList = {
    posts: PostType[],
    remove: (card: PostType)=> void
}

const PostList = ({posts, remove}: PropsList) => {
    return (
        <div className={s.list}>
            {posts.map(card => (
                <PostItem remove={remove} post={card} key={card.id}/>
            ))}
        </div>

    )

};

export default PostList;