import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQHe8imOgcN3LA/profile-displayphoto-shrink_800_800/0/1680802234677?e=1708560000&v=beta&t=f8YRkc6vZebZlpTWBNYYJhQ1WZCdmDxltZMeoG7evv8" alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Atylla Girão</strong>
                            <time dateTime='2023-12-20 18:22:00' title='20 de Dezembro às 18:22h'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}