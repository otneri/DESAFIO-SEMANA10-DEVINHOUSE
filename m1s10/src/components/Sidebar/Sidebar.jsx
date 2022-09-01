
import styles from '../pages/Home/Home.module.css'

export const Sidebar = () => {

    return (
        <aside className={styles.sidebarcontainer}>
            <div className={styles.sidebarcontainer__logo}>
                <h1>DEVInKnowledge</h1>
                <span>Learn, Code and Save</span>
            </div>
            
            <form>
                <div className={styles.inputgroup}>
                <label for="titulo">Titulo</label>
                <input type="text" placeholder="digite um título..." id="titulo" />
                </div>

                <div className={styles.inputgroup}>
                <label for="categoria">Categoria</label>
                <select name="categoria" id="categoria" placeholder="escolha uma categoria...">
                    <option value="">selecione uma categoria...</option>
                    <option value="front-end">Front end</option>
                    <option value="back-end">Back end</option>
                    <option value="full-stack">Full stack</option>
                </select>
                </div>

                <div className={styles.inputgroup}>
                <label for="linguagem">Linguagem / Skill</label>
                <input type="text" id="linguagem" placeholder="digite uma categoria..." />
                </div>

                <div className={styles.inputgroup}>
                <label for="descricao">Descrição</label>
                <textarea type="text" id="descricao" placeholder="digite uma descrição..." rows="5"></textarea>
                </div>

                <div className={styles.inputgroup}>
                <label for="video">Vídeo do Youtube (opcional)</label>
                <input type="text" id="video" placeholder="digite uma url do YouTube..." />
                </div>

                <div className={styles.btngroup}>
                <button className={styles.btnprimary} type="submit">
                    salvar
                </button>
                <button className={styles.btnsecondary} type="submit">
                    limpar
                </button>
                </div>
            </form>
        </aside>
    )

}

