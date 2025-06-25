'use client'

import { deleteLinhaOrientacao } from '@/actions/relatorios/linha-orientacao/actions'
import { CircleX } from 'lucide-react'
import React from 'react'

interface Props {
    linhaID: number
}

function DeleteButton({ linhaID }: Props) {
    return (
        <button
            onClick={() => {
                deleteLinhaOrientacao(linhaID)
            }}
        >
            <CircleX className='text-red-600 duration-150 hover:text-red-900 active:text-red-600' />
        </button>
    )
}

export default DeleteButton