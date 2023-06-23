'use client'

import React from 'react';
import styles from './Login.module.scss';
import Link from 'next/link';
import UserIcon from '#/assets/coupleuser.png';
import PageContainer from '#/components/Container';

function LoginPage() {
    return (
        <PageContainer page='login'>
            <div className='container'>
            <div className={styles.LoginPage}>
                <h1 className={`${styles.Title} h2`}>Entrar no<br /> Windows Live <strong>Messeger</strong></h1>
                <div className='row'>
                    <div className='col-3'>
                        <div className={styles.UserImage}>
                            <img src={UserIcon.src} className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-7'>
                        <form className={styles.LoginForm}>
                            <input
                                className={styles.Input}
                                name='email'
                                type='email'
                                required
                                placeholder='example555@outlook.com'
                            />
                            <input
                                className={styles.Input}
                                name='password'
                                type='password'
                                required
                                placeholder='example555@outlook.com'
                            />
                            <Link className={styles.Link} href='/reset-password'>Esqueceu sua senha?</Link>
                            <div className='row mb-3'>
                                <label>Entrar como:</label>
                                <select name='statusWhenLogin'>
                                    <option value='online'>Disponível</option>
                                    <option value='offline'>Invisível</option>
                                </select>
                            </div>
                            <div className='form-group mb-3'>
                                <div className='row mb-1'>
                                    <input
                                        type='checkbox'
                                        name='remember-login-data'
                                    />
                                    <label>Lembrar minhas ID e senha</label>
                                </div>
                                <div className='row'>
                                    <input
                                        type='checkbox'
                                        name='auto-login'
                                        disabled
                                    />
                                    <label>Entrar automaticamente</label>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <button type='submit' className={`btn mr-3 ${styles.SubmitForm}`}>
                                    Entrar
                                </button>
                                <button type='button' className={`btn mr-3 ${styles.SubmitForm}`}>
                                    Cancelar
                                </button>
                            </div>
                            <div className='row'>
                                <label>Não possui um Windows Live ID?</label>
                                <Link href='/register'>
                                    Inscreva-se
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </PageContainer>
    );
}
export default LoginPage;
