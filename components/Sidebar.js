import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco.js"
import { useRouter } from "next/router.js"

import Categoria from "./Categoria.js"


function Sidebar() {

    const {categorias} = useQuiosco()
    const router = useRouter()

  return (
    <>
        <Image
            width={300} 
            height={100}
            src={"/assets/img/logo.svg"}
            alt="Imagen Logotipo"
            onClick={() => {router.push('/')}}
        />

        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            )
            )}
        </nav>
    </>
  )
}

export default Sidebar