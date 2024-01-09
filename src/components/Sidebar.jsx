import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img    
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://media.licdn.com/dms/image/D4D03AQHe8imOgcN3LA/profile-displayphoto-shrink_800_800/0/1680802234677?e=1708560000&v=beta&t=f8YRkc6vZebZlpTWBNYYJhQ1WZCdmDxltZMeoG7evv8"
                />

                <strong>Jorgirerison Peixoto</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}