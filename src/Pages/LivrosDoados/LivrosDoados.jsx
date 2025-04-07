import livroProtagonista from "../../assets/livroProtagonista.png"
import s from "./livrosDoados.module.scss"
import { useState, useEffect } from "react"
import axios from "axios"
export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const puxarLivros = async () => {
        const resposta = await axios.get("https://api-livros-vai-na-web-cscr.onrender.com/livros")
        setLivros(resposta.data)
        console.log(resposta)
    }
    useEffect(() => {
        puxarLivros()
    }, [])

    return (
        <main className={s.mainLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.listaLivros}>
                {livros.length > 0 ? (
                    livros.map((item) => (
                        <section className={s.cardLivro}>
                            <img src={item.image_url} />
                            <div>
                                <h3>{item.titulo}</h3>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </div>
                        </section>))) : (<section className={s.telaLoading}>
                            <img src="https://i.gifer.com/ZKZg.gif"></img>
                            <p className={s.mensagemLoading}>CARREGANDO LIVROS...</p>
                        </section>)}
            </section>
        </main>
    )
}