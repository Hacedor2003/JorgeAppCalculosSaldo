/* eslint-disable prettier/prettier */
import { RootLayout } from '@renderer/components/AppLayout';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/styles.css';
import { useContext, useState } from 'react';
import { Operacion_Interface } from 'src/shared/types';
import { Button_UI } from '@renderer/components/UI_Component';
import { AppContext } from '@renderer/Data/Store';

const Home = (): JSX.Element => {
  const {
    data: {
      saldo: { data: saldo, state: setSaldo },
      operaciones,
      anadir_operacion,
    },
  } = useContext(AppContext);

  const [operacion, setOperacion] = useState<Operacion_Interface>({
    ID_Operacion: 0,
    gasto: 0,
    ganancia: 0,
    fecha: new Date(),
    comentario: '',
    porciento: 0,
  });

  const handleSubmitCapture = () => {
    let { ganancia, gasto } = operacion;
  
    ganancia = Number.isNaN(ganancia) ? 0 : ganancia;
    gasto = Number.isNaN(gasto) ? 0 : gasto;
  
    const porciento = saldo !== 0 ? ((ganancia - gasto) * 100) / saldo : 0;
  
    setOperacion((prev) => ({
      ...prev,
      ganancia,
      gasto,
      porciento,
    }));
  };
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const { ganancia, gasto } = operacion;

    anadir_operacion(operacion);
    setSaldo((prev) => ( prev + (ganancia - gasto)));
  };

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
              <form onSubmitCapture={handleSubmitCapture} onSubmit={handleSubmit} className="col-span-4 w-full h-full flex flex-col items-start">
              <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputFecha">Fecha:</label>
                  <input onChange={(e)=>setOperacion(prev => {return {...prev, fecha:new Date(e.target.value)}})} value={operacion.fecha.toUTCString()} className='w-1/2 rounded-xl' type="date" name="" id="inputFecha" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputGanancia">Ganancia:</label>
                  <input defaultValue={0} onChange={(e)=>setOperacion(prev => {return {...prev, ganancia:parseInt(e.target.value)}})} value={operacion.ganancia} placeholder='1000' className='w-1/2 rounded-xl' type="number" name="" id="inputGanancia" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputGasto">Gasto:</label>
                  <input defaultValue={0} onChange={(e)=>setOperacion(prev => {return {...prev, gasto:parseInt(e.target.value)}})} value={operacion.gasto} placeholder='1000' className='w-1/2 rounded-xl' type="number" name="" id="inputGasto" />
                </div>
                <div className='w-1/2 my-2 flex flex-col items-start justify-start'>
                  <label className='text-xl font-bold' htmlFor="inputComentario">Comentario</label>
                  <textarea onChange={(e)=>setOperacion(prev => {return {...prev, comentario:e.target.value}})} value={operacion.comentario} className='w-full rounded-xl' name="" id="inputComentario"></textarea>
                </div>
                <Button_UI type='submit' texto='Enviar'/>
              </form>
              <aside className="col-span-2 w-full h-full border-l border-black flex flex-col items-center justify-start">
                <header className="w-full flex flex-row items-center">
                  <h2>Saldo:</h2>
                  <p>{`${saldo} CUP`}</p>
                </header>
                <ul className='w-full px-10'>
                  {operaciones.map((item) => (
                    <li onClick={()=>setOperacion(item)} key={item.ID_Operacion} className={`${item.ganancia > item.gasto ? 'bg-green-500' : 'bg-red-500'} w-1/2 px-2 py-1 mb-2 rounded-xl`}>
                      <div className="contenedor-item-operaciones">
                        <p>Fecha: </p>
                        <span>{item.fecha.toLocaleDateString()}</span>
                      </div>
                      <div className="contenedor-item-operaciones">
                        <p>Por ciento: </p>
                        <span>{" " + item.porciento.toFixed(2)}%</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </section>
          </main>
        </RootLayout>
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;
