import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            {/*Aqui é feito o cabeçalho que contém foto ao lado de nome e cargo embaixo de nome, como pode ser visto no figma. Se atentar a este feito, pois não vai ser feito com grid.*/}
            <header>
                <div className={styles.author}>
                    <Avatar src="https://media.licdn.com/dms/image/C4D03AQHMevyQL0QzlQ/profile-displayphoto-shrink_800_800/0/1613779605254?e=1709164800&v=beta&t=2c0eKnJSNfugkNC0_QxtTzHdWqjZJjY9r_JXeOPSCA4" 
                    />

                    <div className={styles.authorInfo}>
                        <strong>Jorgirerison Leite Peixoto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2023-12-20 18:22:00' title='20 de Dezembro às 18:22h'>Públicado há 1h</time>
            </header>

            {/* Conteúdo */}
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a>jane.design/doctorcare</a></p>

                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>{' '}
                </p>
            </div>
            
            {/* Caixa de texto */}
            <form action="" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário' 
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            {/* Comentários na sua publicação */}
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}