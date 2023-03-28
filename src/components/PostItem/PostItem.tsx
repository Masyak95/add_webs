import React from 'react';
import Button from "../Button/Button";
import s from "./PostItem.module.css"

export type PostType = {
    id: number,
    title: string,
    body: string,
    href: string
}

export type PostItemPropsType = {
    post: PostType,
    remove: (card: PostType)=>void
}

const PostItem = (props: PostItemPropsType) => {
    return (
            <div className={s.card__container} key={props.post.id}>
                <div className={s.cards}>
                    <h3 className={s.cardtitle}>{props.post.title}</h3>
                    <div className={s.cardbody}>{props.post.body}</div>
                    <a href={props.post.href}>Zobrazit web</a>
                </div>
                <div className={s.buttoncard}>
                    <Button title={"Smazat"} onClick={()=>props.remove(props.post)} pathToPage={'/profile'}/>
                </div>
            </div>
    );
};

export default PostItem;