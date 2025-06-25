'use client'

import { deleteOrientador } from '@/actions/relatorios/orientador/actions'
import { CircleX } from 'lucide-react'
import React from 'react'

interface Props {
    orientadorCpf: string
}

function DeleteButton({ orientadorCpf }: Props) {
    return (
        <button
            onClick={() => {
                deleteOrientador(orientadorCpf)
            }}
        >
            <CircleX className='text-red-600 duration-150 hover:text-red-900 active:text-red-600' />
        </button>
    )
}

export default DeleteButton