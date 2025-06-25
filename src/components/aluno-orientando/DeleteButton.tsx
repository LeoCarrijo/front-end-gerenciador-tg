'use client'

import { deleteAlunoOrientando } from '@/actions/relatorios/aluno-orientando/actions'
import { CircleX } from 'lucide-react'
import React from 'react'

interface Props {
    alunoRa: string
}

function DeleteButton({ alunoRa }: Props) {
    return (
        <button onClick={() => {
            deleteAlunoOrientando(alunoRa)
        }}>
            <CircleX className='text-red-600 duration-150 hover:text-red-900 active:text-red-600' />
        </button>
    )
}

export default DeleteButton