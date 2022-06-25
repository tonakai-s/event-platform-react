import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import codeMockupImg from '../assets/code-mockup.png'
import {Alert, AlertTitle, Dialog, Stack} from '@mui/material'

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    const [open, setOpen] = useState(false)
    const handleAlert = () => {
        setOpen(!open)
    }

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        if(name.length > 0 && email.length > 0){
            await createSubscriber({
                variables: {
                    name,
                    email,
                }
            })
            navigate('/event')
        } else {
            handleAlert()
        }
    }



    return(
        <div className="min-h-screen bg-blur bg-no-repeat flex flex-col items-center relative overflow-hidden">
            <div className="bg-reactLogo bg-no-repeat block absolute w-[654px] h-[575px] top-0 mx-auto"></div>
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto z-10 px-3
                            mlg:flex-col mlm:px-0">
                <Dialog open={open} onClose={handleAlert}>
                    <Alert severity="info" color="error">
                        <AlertTitle>Campos vazios</AlertTitle>
                        Para se inscrever, é necessário informar nome e email!
                    </Alert>
                </Dialog>
                <div className="max-w-[640px]
                                mlg:px-6 mlg:text-center mlg:flex mlg:flex-col mlg:items-center">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded
                                mlg:mt-8 mlm:w-full inline">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} action="" className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-greay-900 rounded px-5 h-14 text-gray-500"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-greay-900 rounded px-5 h-14 text-gray-500"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src={codeMockupImg} className="mt-10" alt="" />
        </div>
    )
}