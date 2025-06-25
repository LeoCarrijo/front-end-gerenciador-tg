'use client'

import { deleteAtividade } from '@/actions/relatorios/atividades/actions'
import { CircleX } from 'lucide-react'
import React from 'react'

interface Props {
    atividadeID: number
}

function DeleteButton({ atividadeID }: Props) {
    return (
        <button
            onClick={() => {
                deleteAtividade(atividadeID)
            }}
        >
            <CircleX className='text-red-600 duration-150 hover:text-red-900 active:text-red-600' />
        </button>
    )
}

export default DeleteButton