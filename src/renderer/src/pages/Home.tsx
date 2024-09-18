import { RootLayout, updateMessage } from '@renderer/components/AppLayout'
import { Button_UI } from '@renderer/components/UI_Component'
import { AppContext } from '@renderer/data/Store'
import useCreateOperacion from '@renderer/hooks/useCreateOperacion'
import useDeleteOperacion from '@renderer/hooks/useDeleteOperacion'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { Operacion_Interface } from 'src/shared/types'
import '../styles/styles.css'
import useUpdateSaldo from '@renderer/hooks/useUpdateSaldo'

const Home = (): JSX.Element => {
  window.bridge.updateMessage(updateMessage)
  const {
    data: {
      saldo: { data: saldo, state: setSaldo },
      operaciones: { data: operaciones, state: setOperaciones }
    }
  } = useContext(AppContext)

  const [operacion, setOperacion] = useState<Operacion_Interface>({
    gasto: 0,
    ganancia: 0,
    fecha: new Date(),
    comentario: '',
    porciento: 0
  })

  const handleSubmitCapture = () => {
    let { ganancia, gasto } = operacion

    ganancia = Number.isNaN(ganancia) ? 0 : ganancia
    gasto = Number.isNaN(gasto) ? 0 : gasto

    const porciento = saldo !== 0 ? ((ganancia - gasto) * 100) / saldo : 0

    setOperacion((prev) => ({
      ...prev,
      ganancia,
      gasto,
      porciento
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    useCreateOperacion(operacion)
      .then((response) => setOperaciones((prev) => [...prev, response]))
      .catch((error) => console.error(error))
    setSaldo((prev) => {
      useUpdateSaldo(prev + (operacion.ganancia - operacion.gasto))
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
      return prev + (operacion.ganancia - operacion.gasto)
    })
  }

  const handleDelete = (id: number) => {
    useDeleteOperacion(id)
      .then(() => setOperaciones((prev) => prev.filter((item) => item.ID_Operacion !== id)))
      .catch((error) => console.error(error))
  }

  return (
    <AnimatePresence>
      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="w-screen h-screen flex flex-col items-center justify-center"
      >
        <RootLayout>
          <p id="message"></p>
          <main className="w-full h-full flex flex-col items-center justify-center p-2">
            <section className="w-11/12 h-full grid grid-cols-6 grid-rows-1 p-2 rounded-xl bg-fondo border-black">
              <form
                onSubmitCapture={handleSubmitCapture}
                onSubmit={handleSubmit}
                className="col-span-4 w-full h-full flex flex-col items-start"
              >
                {/* Formulario para la operación */}
                <div className="w-1/2 my-2 flex flex-col items-start justify-start">
                  <label className="text-xl font-bold" htmlFor="inputFecha">
                    Fecha:
                  </label>
                  <input
                    onChange={(e) =>
                      setOperacion((prev) => ({ ...prev, fecha: new Date(e.target.value) }))
                    }
                    value={operacion.fecha.toISOString().split('T')[0]}
                    className="w-1/2 rounded-xl"
                    type="date"
                    name=""
                    id="inputFecha"
                  />
                </div>
                <div className="w-1/2 my-2 flex flex-col items-start justify-start">
                  <label className="text-xl font-bold" htmlFor="inputGanancia">
                    Ganancia:
                  </label>
                  <input
                    defaultValue={0}
                    onChange={(e) =>
                      setOperacion((prev) => ({ ...prev, ganancia: parseInt(e.target.value) }))
                    }
                    value={operacion.ganancia}
                    placeholder="1000"
                    className="w-1/2 rounded-xl"
                    type="number"
                    name=""
                    id="inputGanancia"
                  />
                </div>
                <div className="w-1/2 my-2 flex flex-col items-start justify-start">
                  <label className="text-xl font-bold" htmlFor="inputGasto">
                    Gasto:
                  </label>
                  <input
                    defaultValue={0}
                    onChange={(e) =>
                      setOperacion((prev) => ({ ...prev, gasto: parseInt(e.target.value) }))
                    }
                    value={operacion.gasto}
                    placeholder="1000"
                    className="w-1/2 rounded-xl"
                    type="number"
                    name=""
                    id="inputGasto"
                  />
                </div>
                <div className="w-1/2 my-2 flex flex-col items-start justify-start">
                  <label className="text-xl font-bold" htmlFor="inputComentario">
                    Comentario
                  </label>
                  <textarea
                    onChange={(e) =>
                      setOperacion((prev) => ({ ...prev, comentario: e.target.value }))
                    }
                    value={operacion.comentario}
                    className="w-full rounded-xl"
                    name=""
                    id="inputComentario"
                  ></textarea>
                </div>
                <Button_UI type="submit" texto="Enviar" />
              </form>
              <aside className="col-span-2 w-full h-full border-l border-black flex flex-col items-center justify-start">
                <header className="w-full flex flex-row items-center">
                  <h2>Saldo:</h2>
                  <p>{`${saldo} CUP`}</p>
                </header>
                <ul className="w-full px-10">
                  {operaciones.map((item) => (
                    <li
                      onClick={() => setOperacion(item)}
                      key={item.ID_Operacion}
                      className={`${item.ganancia > item.gasto ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 mb-2 rounded-xl flex flex-row items-center`}
                    >
                      <div className="contenedor-item-operaciones">
                        <p className="text-lg font-bold">Fecha: </p>
                        <span>{item.fecha.toLocaleDateString()}</span>
                      </div>
                      <div className="contenedor-item-operaciones">
                        <p className="text-lg font-bold">Por ciento: </p>
                        <span>{' ' + item.porciento.toFixed(2)}%</span>
                      </div>
                      <Button_UI
                        type="button"
                        texto="Eliminar"
                        funcion={() => handleDelete(item.ID_Operacion)}
                      />
                    </li>
                  ))}
                </ul>
              </aside>
            </section>
          </main>
        </RootLayout>
      </motion.main>
    </AnimatePresence>
  )
}

export default Home
