// JSX = Javascript = XML
import {Post} from './components/Post';
import {Header} from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

// this's a array
// it's a simulation that information of backend
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQHMevyQL0QzlQ/profile-displayphoto-shrink_800_800/0/1613779605254?e=1710374400&v=beta&t=SgLjscGSD9yxZwb_JROgWXRQ6MWoiE7J5NYIeAKAR-A',
      name: 'Atylla Girão',
      role: 'Developer'
    },
    content: [
      // this is a inovation type for the pass the text 
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-13 13:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQFTnctUiEPXEQ/profile-displayphoto-shrink_800_800/0/1690047668948?e=1710374400&v=beta&t=kTU0E8ZZWA2tXESE0rRMSxck9DPy-OFHcDpRVbaFU5U',
      name: 'Hislley Rauter',
      role: 'CEO Rauter'
    },
    content: [
      // this is a inovation type for the pass the text 
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-05 16:52:00')
  }
]

export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}


