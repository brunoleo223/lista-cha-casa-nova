import styles from './style.module.scss';
import data from '../../utils/presentes.json'
import { Item } from '../Item';

export function Presentes() {
    return (
        <div className={styles.presentes}>
            <h2>quer dar um presentin?</h2>
            <h3>aqui tem algumas coisas que eu vou precisar, <br/> se quiser deixar um pedacinho de você no apezin 805, é só escolher 👇 </h3>
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
