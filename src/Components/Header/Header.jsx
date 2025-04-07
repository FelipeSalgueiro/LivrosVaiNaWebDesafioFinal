import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import mainLogo from "../../assets/mainLogo.png"
import lupinhaBarra from "../../assets/lupinhaBarra.png"
import Inicio from "../../Pages/Inicio/Inicio"
import LivrosDoados from "../../Pages/LivrosDoados/LivrosDoados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import s from "./header.module.scss"
export default function Header(){
    return(
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.logoHeader}>
                    <img className={s.logoImg} src={mainLogo} alt="Ícone de um livro aberto. É a logo do site."/>
                    <h1 className={s.h1Header}>Livros Vai na Web</h1>
                </section>
                <nav>
                    <ul className={s.navHeader}>
                        <li><Link className={s.link} to="/">Inicio</Link></li>
                        <li><Link className={s.link}to="/livros_doados">Livros Doados</Link></li>
                        <li><Link className={s.link} to="/quero_doar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraPesquisa}>
                    <input type="search" name="" id="" placeholder="O que você procura?"/>
                    <button><img className={s.lupaPesquisa} src={lupinhaBarra} alt="Ícone de uma lupa, clicando nele você vai começar a busca pelo item digitado na barra de busca."/></button>
                </section>
            </header>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/livros_doados" element={<LivrosDoados/>}/>
                <Route path="/quero_doar" element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}