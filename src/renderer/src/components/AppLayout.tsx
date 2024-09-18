import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'

export const RootLayout = ({ children }: ComponentProps<'main'>): JSX.Element => {
  return (
    <main className="w-full h-full bg-imagen-home flex flex-col items-center justify-start text-black select-none">
      {children}
    </main>
  )
}

export const Sidebar = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <main className="h-24 overflow-auto flex flex-row items-center justify-center">
      <header className="col-span-2 w-full h-5/6 self-start bg-fondo text-black flex flex-row items-center justify-center p-3 rounded-b-xl">
        <ul className="w-full flex flex-row items-center justify-around gap-x-3">
          <li
            className="cursor-pointer text-2xl hover:mx-2 hover:scale-110 duration-300 w-max flex items-center gap-x-2"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
              <path
                fill="currentColor"
                d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
              />
            </svg>
            Atras
          </li>
          <li
            className="cursor-pointer text-2xl hover:mx-2 hover:scale-110 duration-300 w-max flex items-center gap-x-2"
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.285 12h-8.012m5.237 3.636L20 12l-3.49-3.636M13.455 7V4H4v16h9.455v-3"
              />
            </svg>
            Salir
          </li>
        </ul>
      </header>
    </main>
  )
}

export const Card_UI_Home = ({ className, children }: { className: string; children: any }) => {
  return (
    <div
      className={`w-[200px] h-auto ${className} rounded-xl flex flex-col items-center justify-center`}
    >
      <div className="w-full h-full flex flex-col items-center justify-around my-2 px-2">
        {children}
      </div>
    </div>
  )
}
