/* eslint-disable prettier/prettier */
import { RootLayout } from '@renderer/components/AppLayout'
import { AnimatePresence, motion } from 'framer-motion'
import '../styles/styles.css'

const Home = (): JSX.Element => {

  return (
    <AnimatePresence>
      <motion.main
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="w-screen h-screen flex flex-col items-center justify-center"
      >
        <RootLayout>
          <main className="w-full h-full flex flex-col items-center justify-center p-2">
            <section className="w-11/12 h-full grid grid-cols-6 grid-rows-1 p-2 rounded-xl bg-fondo border-black">
              <main className="col-span-4 w-full h-full flex flex-col items-start">
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputFecha">Fecha:</label>
                  <input className='w-1/2 rounded-xl' type="date" name="" id="inputFecha" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputGanancia">Ganancia:</label>
                  <input placeholder='1000' className='w-1/2 rounded-xl' type="number" name="" id="inputGanancia" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputGasto">Gasto:</label>
                  <input placeholder='1000' className='w-1/2 rounded-xl' type="number" name="" id="inputGasto" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputComentario">Comentario</label>
                  <textarea className='w-full rounded-xl' name="" id="inputComentario"></textarea>
                </div>
              </main>
              <aside className="col-span-2 w-full h-full border-l border-black flex flex-col items-center justify-start">
                <header className="w-full flex flex-row items-center">
                  <h2>Saldo:</h2>
                  <p>{'1500 CUP'}</p>
                </header>
              </aside>
            </section>
          </main>
        </RootLayout>
      </motion.main>
    </AnimatePresence>
  )
}

export default Home
