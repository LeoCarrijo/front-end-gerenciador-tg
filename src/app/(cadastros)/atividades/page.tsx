'use client'

import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import CardFatec from '@/components/CardFatec';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from "date-fns"

// Link para o schema do Prisma com os nomes das variáveis
// https://github.com/MotahPedro/Gerenciador-de-TG/blob/develop/back-end/prisma/schema.prisma

function Page() {
    const [date, setDate] = React.useState<Date>()

    return (
        <CardFatec
            description={`Cadastro e Envio de Atividades`}
            buttonText={`Enviar`}
            buttonFunction={() => { alert(`Enviado!`) }}
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="matricula">RA</Label>
                <Input name="matricula" id="matricula" type="number" placeholder="Digite o RA do aluno" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="dataEntrega">Data de Entrega</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            name='dataEntrega'
                            id='dataEntrega'
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon />
                            {date ? format(date, "dd/MM/yyyy") : <span>dd/mm/aaaa</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border p-2"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="arquivo">Arquivo do Trabalho</Label>
                <Input className='w-full' id="arquivo" name='arquivo' type="file" />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="descricao">Descrição da Atividade</Label>
                <Textarea name="descricao" id="descricao" placeholder="Digite a descrição da atividade" />
            </div>
        </CardFatec>
    );
}

export default Page;
