import React, { useState } from 'react';
import s from './App.module.css';
import { PostType } from "./components/PostItem/PostItem";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Another from "./components/Error/Another";


function App() {
    const [cards, setCards] = useState<PostType[]>([
        { id: 1, title: "Oficiální web Vue.js", body: "Oficiální web Vue.js dokumentace", href: "https://vuejs.org/" },
        { id: 2, title: "Google", body: "Vyhledáváč", href: "https://www.google.cz/" }
    ]);

    const createPost = (newPost: PostType) => {
        setCards([...cards, newPost])
    };

    const removePost = (card: PostType) => {
        setCards(cards.filter(c => c.id !== card.id))
    };

    return (
        <BrowserRouter>
            <div className={s.app}>
                <div className={s.app__container}>
                    <Header />
                    <div className={s.wrap}>
                        <Buttons />
                        <Routes>
                            <Route path="/add" element={<PostForm create={createPost} />} />
                            <Route path="/profile" element={cards.length !== 0 ? <PostList remove={removePost} posts={cards} /> : <Another />} />
                            <Route path="/" element={<PostList remove={removePost} posts={cards} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
