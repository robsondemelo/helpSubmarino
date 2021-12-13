import { useRouter } from 'next/router'

export default function Categoria() {
    const router = useRouter()

    console.log(router.query.id)
    return (
        <h1>Categoria {router.query.id}</h1>
    )
}