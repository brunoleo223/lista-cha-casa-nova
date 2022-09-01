import styles from './style.module.scss';
import data from '../../utils/presentes.json'
import { Item } from '../Item';

export function Presentes() {
    return (
        <div className={styles.presentes}>
            <h2>gostaria de me ajudar?</h2>
            <h3>aqui tem algumas coisas que vou comprar, se quiser você pode me dar uma delas de presente</h3>
            <div className={styles.presentes__lista}>
                {data.presentes.map((item) => (
                    <Item
                        key={item.id}
                        nome={item.nome} 
                        valor={item.valor} 
                        link={item.link} 
                        foto={item.foto} 
                        disponivel={item.disponivel}
                        pessoa={item.pessoa}
                    />
                ))}
            </div>
        </div>
    )
}