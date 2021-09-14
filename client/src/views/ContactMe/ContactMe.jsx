import React, { useState } from 'react';
import style from './ContactMe.module.scss'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { SiGmail } from 'react-icons/si'
import emailJs from 'emailjs-com';

const initState = {
    name: '',
    email: '',
    text: ''
}

function ContactMe() {
    const [          body, setBody      ] = useState(initState);
    const [     isSending, setIsSending ] = useState(false);
    const [       wasSent, setWasSent   ] = useState(false);
    const [ resultMessage, setResultMessage ] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true)
        emailJs.sendForm('service_tu1z108', 'template_vqc2w2g', e.target, 'user_ScvJzliGwo3gxrNCMegZO')
            .then(()=>{
                setWasSent(true);
                setResultMessage('Message sent, thank you!');
                setTimeout(()=>{ 
                    setWasSent(false);
                    setIsSending(false); 
                },5000)
            }).catch(()=>{
                setWasSent(true);
                setResultMessage('The message was not sent.');
                setTimeout(()=>{ 
                    setWasSent(false);
                    setIsSending(false); 
                },5000)
            })
        setBody(initState);
    };

    const handleOnChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div className={style.container}>
        <div className={style.info}>
            <div className={style.links}>
                <div className={style.link}>
                    <IoLogoGithub></IoLogoGithub>
                    <a href='https://github.com/martinnegro'>
                        /martinnegro
                    </a>
                </div>
                <div className={style.link}>
                    <IoLogoLinkedin></IoLogoLinkedin>
                    <a href='https://www.linkedin.com/in/martinnegro/'>
                        /in/martinnegro
                    </a>
                </div>
                <div className={style.link}>
                    <SiGmail></SiGmail>
                    mnegro91@gmail.com
                </div>
            </div>
            <div className={style.formActionsContainer}>
            {   
                !isSending ?
                <div className={style.contactForm}>
                    <p> Or you can send me an email here: </p>
                    <form
                        onChange={handleOnChange}
                        onSubmit={sendEmail}
                    >
                        <input
                            type='text'
                            name='name'
                            value={body.name}
                            placeholder='Name'
                            required
                        />
                        <input
                            type='text'
                            name='email'
                            value={body.email}
                            placeholder='Email'
                            required
                        />
                        <textarea                        
                            name='text'
                            value={body.text}
                            placeholder='Text'
                            required
                        />
                        <button
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                </div> :  isSending && !wasSent ? 
                    <div className={style.center}>
                      <div className={style.cir}>
                        <span className={style.c1}></span>
                        <span className={style.c2}></span>
                      </div>
                    </div>
                : 
                <div
                    style={{ margin: 'auto', textAlign: 'center' }}
                >
                    {resultMessage}
                </div>
            }
            </div>
        </div>
        </div>
    )
}

export default ContactMe
