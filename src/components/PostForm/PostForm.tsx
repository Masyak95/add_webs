import React, {ChangeEvent, useState} from 'react';
import Button from "../Button/Button";
import s from "./PostForm.module.css"
import Input from "./Input/Input";
import {PostType} from "../PostItem/PostItem";
import DialogModal from "../DialogModal/DialogModal";
import {useNavigate} from "react-router-dom";


type PostFormType = {
    create: (newPost: PostType) => void
}
const PostForm = ({create}: PostFormType) => {
    const [post, setPost] = useState({title:"", body:"", href: ""})
    const [modal, setModal] = useState<boolean>(false)

    const navigate = useNavigate();


    const addNewPost = () => {
        console.log(post)
        if (post.title === '' && post.body === '' && post.href === '') {
            setModal(true)
            return
        }

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", body: "",href: "Zobrazit web"})
        console.log(newPost)
        navigate("/profile")
    }


    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.target.value})
    }

    const changeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost({...post, body: e.target.value})
    }
    const changeHref = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, href: e.target.value})
    }


    return (
        <>
            <div className={s.postform__container}>
                <div className={s.input}>
                    <Input title={"Název"} value={post.title} onChange={changeTitle} />
                </div>
                <div className={s.input}>
                    <label htmlFor="body"><strong>Popis</strong></label>
                    <textarea id="body" value={post.body} onChange={changeBody} />
                </div>

                <Input title={"Odkaz"} value={post.href} onChange={changeHref}/>
                <div className={s.bottoninput}>
                    <Button title={"Přídat web"} onClick={addNewPost}/>
                </div>
            </div>
            <DialogModal visible={modal} setVisible={setModal}/>
        </>
    );
};

export default PostForm;