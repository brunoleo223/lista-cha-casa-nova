import styles from './style.module.scss';

export function Item({nome, valor, link, foto, disponivel, pessoa}) {
    return (
        <div className={styles.item}>
            
            {disponivel && <span className={styles.presente}>Obrigada <b>{pessoa}</b> pelo presente</span>}
            <div className="item__foto">
                <img src={foto} alt={nome} />
            </div>
            <div className="dados">
                <h3 className="dados__titulo">{nome}</h3>
                <span className="dados__valor">{valor}</span>
            </div>
            {!disponivel && 
                <div className="item__botoes">
                    <a href="" target="_blank">Vou dar presente!</a>
                    <a href={link} className={styles.link2} target="_blank">ver mais!</a>
                </div>
            }
        </div>
    )
}
