import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

//Estado = variáveis que eu quero que o React monitore

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Post muita bacana, hein!?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    // padrão quando o usuário dispara a função 'handle'
    function handleCreateNewComment() {
        // Por padrão o button do type submit nos redireciona para outra página ao ser clicado, o comando abaixo impede essa persistência
        event.preventDefault()
                
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleCreateNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        // imutabilidade -> as variáveis não sofrem mutação, nos criamos um novo valor (um novo espaço na memória)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText == 0

    return (
        <article className={styles.post}>
            {/*Aqui é feito o cabeçalho que contém foto ao lado de nome e cargo embaixo de nome, como pode ser visto no figma. Se atentar a este feito, pois não vai ser feito com grid.*/}
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted} >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            {/* Conteúdo */}
            <div className={styles.content}>
                {/* percorrer array*/}
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            
            {/* Caixa de texto */}
            <form onSubmit={handleCreateNewComment} action="" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment" 
                    placeholder="Deixe um comentário" 
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            {/* Comentários na sua publicação */}
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}