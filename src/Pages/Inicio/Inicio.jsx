import grupoImg from "../../assets/grupoImg.png"
import lendoImg from "../../assets/lendoImg.png"
import punhoImg from "../../assets/punhoImg.png"
import balancaImg from "../../assets/balancaImg.png"
import s from "./inicio.module.scss"
export default function Inicio(){
    return(
        <main>
            <section className={s.introducaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.motivosDoacao}>
                <h2>Por que devo doar?</h2>
                <section className={s.listaMotivos}>
                    <figure className={s.motivoSolo}>
                        <img src={grupoImg} alt="Imagem possui 4 pessoas e elas se conectam por um círculo."/>
                        <figcaption>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                    </figure>
                    <figure className={s.motivoSolo}>
                        <img src={lendoImg} alt="Imagem apresenta uma pessoa lendo um livro."/>
                        <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
                    </figure>
                    <figure className={s.motivoSolo}>
                        <img src={punhoImg} alt="Imagem possui um punho erguido dentro de um círculo. Embaixo tem 6 pessoas conectadas ao círculo com o punho."/>
                        <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                    </figure>
                    <figure className={s.motivoSolo}>
                        <img src={balancaImg} alt="Imagem de uma balança."/>
                        <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                    </figure>
                </section>
            </section>
        </main>
    )
}