import { useState } from "react";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/evandronosse.png",
      name: "Evandro NossÃ©",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-08 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/anthonyandrey.png",
      name: "Anthony Andrey",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal ð" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-10 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
