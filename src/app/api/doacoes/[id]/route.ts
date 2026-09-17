import { NextResponse, type NextRequest } from 'next/server'
import { prisma } from '@/server/prisma'
import { authenticate } from '@/server/auth'

interface RouteParams {
    params: Promise<{ id: string }>
}

const STATUS_VALIDOS = ['pendente', 'contatado', 'concluido']

export async function PUT(request: NextRequest, { params }: RouteParams) {
    const auth = authenticate(request)
    if ('error' in auth) return auth.error

    try {
        const { id } = await params
        const { status } = await request.json()

        if (!STATUS_VALIDOS.includes(status)) {
            return NextResponse.json({ error: 'Status inválido' }, { status: 400 })
        }

        const doacao = await prisma.doacao.update({ where: { id }, data: { status } })
        return NextResponse.json(doacao, { status: 200 })
    } catch (error) {
        console.error('Erro ao atualizar doação:', error)
        return NextResponse.json({ error: 'Erro ao atualizar doação' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const auth = authenticate(request)
    if ('error' in auth) return auth.error

    try {
        const { id } = await params
        await prisma.doacao.delete({ where: { id } })
        return NextResponse.json({ message: 'Doação removida com sucesso' }, { status: 200 })
    } catch (error) {
        console.error('Erro ao remover doação:', error)
        return NextResponse.json({ error: 'Erro ao remover doação' }, { status: 500 })
    }
}