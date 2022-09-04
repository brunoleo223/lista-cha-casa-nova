import styles from './style.module.scss';
import data from '../../utils/presentes.json'
import { Item } from '../Item';

export function Presentes() {
    return (
        <div className={styles.presentes}>
            <h2> quer me dar um presentin? </h2>
            <h3> aqui tem algumas coisas que eu vou precisar muito e você pode me ajudar (: </h3>
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
