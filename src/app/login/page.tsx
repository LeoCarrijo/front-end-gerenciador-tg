import React from 'react';
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-[500px] shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-8 overflow-hidden">
                        <Image
                            className="w-[150px] h-[80px]"
                            src="/fatec-logo.png"
                            width={150}
                            height={80}
                            alt="Logo Fatec"
                        />
                        <div className="flex items-center gap-4 justify-end w-full">
                            <Image
                                className="w-[66px] h-[44px]"
                                src="/cps-logo.png"
                                width={66}
                                height={44}
                                alt="Logo CPS"
                            />
                            <Image
                                className="w-[150px] h-[30px]"
                                src="/sp-logo.png"
                                width={150}
                                height={30}
                                alt="Logo SP"
                            />
                        </div>
                    </CardTitle>
                    <CardDescription className="mt-2 font-bold text-2xl text-black text-center">Sistema de Gestão de Professores Orientadores</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email">E-mail</Label>
                        <Input name="email" id="email" type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="senha">Senha</Label>
                        <Input name="senha" id="senha" type="password" placeholder="Digite sua senha" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-stretch w-full">
                    <Button className="bg-blue-500 cursor-pointer text-white w-full" variant="default">Enviar</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LoginPage;