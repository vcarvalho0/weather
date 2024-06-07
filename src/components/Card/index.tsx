import { MaxIcon } from '../MaxIcon'
import { MinIcon } from '../MinIcon'

type CardProps = {
  weatherIcon: string
  day: string
  minTemperature: number
  maxTemperature: number
}

export const Card = ({ minTemperature, maxTemperature }: CardProps) => {
  return (
    <div className="border-main flex h-full rounded-lg border bg-white text-black backdrop-blur-lg duration-300">
      <div className="flex w-full flex-col justify-between">
        <div className="flex flex-row p-6">
          <span className="mx-1 block h-6 w-1 rounded bg-red-500"></span>
          <p className="font-bold">Temperatura</p>
          <MinIcon height={26} width={11} className="mx-2" />
          <p>{minTemperature}º</p>
          <MaxIcon height={26} width={11} className="mx-2" />
          <p>{maxTemperature}º</p>
        </div>
        <footer className="border-main border-t py-2 text-center text-sm">
          Mostrar detalhes
        </footer>
      </div>
    </div>
  )
}
