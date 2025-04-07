import livroAberto from "../../assets/livroAberto.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from "axios"
export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImage_url = (e) => {
        setImage_url(e.target.value)
    }

    const envioDados = async() =>{

        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post("https://api-livros-vai-na-web-cscr.onrender.com/doar", dadosParaEnviar)
    }

    return (
        <main className={s.mainQueroDoar}>
            <h2 className={s.tituloDoacao}>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <section className={s.formCompleto}>
                <section className={s.formTitulo}>
                    <img src={livroAberto} alt="Ícone de um livro aberto." />
                    <h3>Informações do Livro</h3>
                </section>
                <form className={s.formDoacao} action="" onSubmit={(e) => e.preventDefault()}>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Titulo" onChange={capturaTitulo} required/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Categoria" onChange={capturaCategoria} required/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Autor" onChange={capturaAutor} required/>
                    <input className={s.inputFormDoacao} type="text" name="" id="" placeholder="Link da Imagem" onChange={capturaImage_url} required/>
                    <input className={s.buttonDoacao} type="submit" value="Doar" onClick={envioDados} />
                </form>
            </section>
        </main>
    )
}