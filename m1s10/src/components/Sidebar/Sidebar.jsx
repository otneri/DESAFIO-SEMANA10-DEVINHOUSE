
import {  useForm } from 'react-hook-form'
import React from 'react';
import { useAppContext } from '../../contexts/app-context';
import styles from '../pages/Home/Home.module.css'


export const Sidebar = () => {
    const {createTip} = useAppContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
    //   const onSubmit = (data) => console.log(data);

    
    const handleCreateTip = ((data) => createTip(data))
    
    return (
        <aside className={styles.sidebarcontainer}>
            <div className={styles.sidebarcontainer__logo}>
                <h1>DEVInKnowledge</h1>
                <span>Learn, Code and Save</span>
            </div>
            
            <form onSubmit={handleSubmit(handleCreateTip)}>
                <div className={styles.inputgroup}>
                <label htmlFor="titulo">Titulo</label>
                <input {...register('titulo', {required: true})} 
                        type="text" 
                        placeholder="digite um título..." 
                        id="titulo" 
                        />
                {errors.titulo && <p>Titulo obrigatório.</p>}
                </div>

                <div className={styles.inputgroup}>
                <label htmlFor="categoria">Categoria</label>
                <select {...register('categoria', {required: true})} 
                        name="categoria" 
                        id="categoria" 
                        placeholder="escolha uma categoria...">
                    <option value="">selecione uma categoria...</option>
                    <option value="front-end">Front end</option>
                    <option value="back-end">Back end</option>
                    <option value="full-stack">Full stack</option>
                </select>
                {errors.categoria && <p>Categoria obrigatória.</p>}
                </div>

                <div className={styles.inputgroup}>
                <label htmlFor="linguagem">Linguagem / Skill</label>
                <input 
                    {...register('linguagem' , {required: true})} 
                    type="text" 
                    id="linguagem" 
                    placeholder="digite uma categoria..." />
                    {errors.linguagem && <p>Linguagem obrigatória.</p> }
                </div>

                <div className={styles.inputgroup}>
                <label htmlFor="descricao">Descrição</label>
                <textarea {...register ('descricao' , { min:10, max:64, required:true })} 
                        type="text" 
                        id="descricao" 
                        placeholder="digite uma descrição..." 
                        rows="5">
                </textarea>
                {errors.descricao && <p>Descricao obrigatória.</p>}
                </div>

                <div className={styles.inputgroup}>
                <label htmlFor="video">Vídeo do Youtube (opcional)</label>
                <input {...register('video' , {required:false})} 
                        type="text" 
                        id="video" 
                        placeholder="digite uma url do YouTube..." />
                </div>

                <div className={styles.btngroup}>
                <button className={styles.btn} type="submit">
                    salvar
                </button>
                <button className={styles.btn} type="button">
                    limpar
                </button>
                </div>
            </form>
        </aside>
    )

}

