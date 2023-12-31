import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

function Producto({producto}) {
    const {handleSetProducto, handleChangeModal} = useQuiosco()
    const {nombre, imagen, precio} = producto
  return (
    <>
        <div className='border p-3'>
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen Producto ${nombre}`}
                width={400}
                height={400}
            />
            <div className="p-5">
                <h3 className="text-xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-2xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold uppercase"
                    onClick={() => {
                        handleChangeModal()
                        handleSetProducto(producto)
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>

        
    </>
    
  )
}

export default Producto