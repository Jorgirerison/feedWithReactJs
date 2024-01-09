// JSX = Javascript = XML
import {Post} from './components/Post';
import {Header} from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Letícia Diogenes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed, iusto consequuntur quisquam dignissimos corrupti harum debitis ex nobis. Iste soluta mollitia sint culpa ratione debitis, quia voluptatum facere praesentium."
          />
          <Post />
        </main>
      </div>
    </div>
  )
}


