import styles from './style.module.scss';

export function Convite(){
    return(
        <div className={styles.convite}>
            <h2>dia <span>XX</span> de setembro às <span>XXh</span></h2>
            <h3> você está convidado pro meu cházin de casa nova ❤️</h3>
            <a href="" target="_blank"> clica aqui pra confirmar sua presença </a>
        </div>
    )
}
