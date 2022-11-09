import { useState } from "react";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Evandro Nossé"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper nulla augue, nec venenatis lectus convallis volutpat. Donec dictum at urna quis tincidunt. Fusce ut turpis a lectus rutrum scelerisque et id ipsum. Donec sed blandit magna, faucibus molestie mi. Nullam velit lorem, semper et hendrerit sit amet, pellentesque eget dolor. Vivamus suscipit eros a mauris pulvinar volutpat. Etiam accumsan mattis elementum. Maecenas vitae velit at ante porttitor pulvinar."
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper nulla augue, nec venenatis lectus convallis volutpat. Donec dictum at urna quis tincidunt. Fusce ut turpis a lectus rutrum scelerisque et id ipsum. Donec sed blandit magna, faucibus molestie mi. Nullam velit lorem, semper et hendrerit sit amet, pellentesque eget dolor. Vivamus suscipit eros a mauris pulvinar volutpat. Etiam accumsan mattis elementum. Maecenas vitae velit at ante porttitor pulvinar."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
