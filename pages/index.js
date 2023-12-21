
import Layout from "../layout/Layout.js"
import useQuiosco from "../hooks/useQuiosco.js"
import Producto from "../components/Producto.js"

export default function Home() {
  const {categoriaActual} = useQuiosco()
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10">
          Elige y personaliza tu pedido a continuación
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5">
          {categoriaActual?.productos?.map(
            producto => (
              <Producto
                key={producto.id}
                producto={producto}
              />
            )
          )}
        </div>
        
    </Layout>
  )
}
