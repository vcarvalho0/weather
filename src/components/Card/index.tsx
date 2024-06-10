import { MaxIcon } from '../MaxIcon'
import { MinIcon } from '../MinIcon'
import Image from 'next/image'

type CardProps = {
  weatherIcon: string
  country: string
  city: string
  minTemperature: number
  maxTemperature: number
}

export const Card = ({
  minTemperature,
  maxTemperature,
  city,
  country,
  weatherIcon,
}: CardProps) => {
  return (
    <div className="border-main flex h-full rounded-lg border bg-white text-black">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center">
          <p className="font-bold">{country}</p>
          <p>{city}</p>

          <Image
            src={weatherIcon}
            alt="Weather condition"
            width={50}
            height={60}
          />
        </div>

        <div className="flex flex-row items-center p-2">
          <span className="mx-1 block h-5 w-[0.3rem] rounded bg-rose-600"></span>
          <p className="font-bold">Temperatura</p>
          <MinIcon height={26} width={10} className="mx-2" />
          <p>
            {minTemperature}
            <span>º</span>
          </p>
          <MaxIcon height={26} width={10} className="mx-2" />
          <p>
            {maxTemperature}
            <span>º</span>
          </p>
        </div>

        <footer className="border-main border-t py-2 text-center text-sm">
          Mostrar detalhes
        </footer>
      </div>
    </div>
  )
}
