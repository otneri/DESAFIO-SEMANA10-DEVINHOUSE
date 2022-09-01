
import styles from './Home.module.css'
export const Home = () =>{

    return(
        <body>
            <header>
                <div>
                    <h1>DEVin <strong>Knowledge</strong> </h1>
                    <h2>Learn, Code and Save</h2>
                </div>
                <img src="../../assets/img/icone.png" alt="logo"/>
            </header>

            <main>
                <section id="secaoformulario" className={styles.secaoformulario}>
                    
                    <form action="">
                        <input type="hidden" id="id" className={styles.id}/>
                        
                        <div>
                            <label htmlFor="titulo">Título</label>
                            <input type="text" minLength="8" maxLength="64" id="titulo" className={styles.titulo} placeholder="Digite um título"/>
                        </div>
                        
                        <div>
                            <label htmlFor="skill">Linguagem/Skill</label>
                            <input type="text" minLength="4" maxLength="16  " id="skill" className={styles.text} placeholder="Digite uma linguagem ou skill"/>
                        </div>
                        
                        <div>
                            <label htmlFor="categoria">Categoria</label>
                            <select  id="categoria" className="categoria" placeholder="Selecione uma categoria">
                                <option value="selecione">Selecione</option>
                                <option value="frontend">FrontEnd</option>
                                <option value="backend">BackEnd</option>
                                <option value="fullstack">FullStack</option>
                                <option value="comportamental">Comportamental/Soft</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea minLength="32" maxLength="512" id="descricao" className="descricao" placeholder="Digite uma descrição"></textarea>
                        </div>

                        <div>
                            <label htmlFor="url">Vídeo do YouTube</label>
                            <input type="url" id="url"  placeholder="link YouTube"/>
                        </div>
                        
                        <button type="reset" id="limpar">Limpar</button>
                        <button type="submit" id="salvar" >Salvar</button>
                        <button type="submit" id="preencher" >Preencher</button>
                    </form>
                </section>

                <section id="secaocards" className="secaocards">
                    <ul id="contacategoria" className="contacategoria">
                        <li >
                            <h3>Total</h3>
                            <p id="total"></p>
                            
                        </li>
                        <li >
                            <h3>FullStack</h3>
                            <p id="full"></p>
                        </li>
                        <li >
                            <h3>BackEnd</h3>
                            <p id="back"></p>
                        </li>
                        <li >
                            <h3>FrontEnd</h3>
                            <p id="front"></p>
                        </li>
                        <li >
                            <h3>SoftSkill</h3>
                            <p id="soft"></p>
                        </li>
                    </ul>

                    <div className="search">
                        <input type="text" id="pesquisar" className="pesquisar" placeholder="Digite a busca"/>
                        <button id="pesquisarbotao" type="submit"><img src="/assets/img/lupa.png" alt=""/></button>
                        <button id="cancelar" type="reset"><img src="/assets/img/excluir.png" alt=""/></button>
                    </div>

                    <ul id="cards" className="cards">
                        
                        
                    </ul>
                </section>
            </main>

        </body>
    )
}