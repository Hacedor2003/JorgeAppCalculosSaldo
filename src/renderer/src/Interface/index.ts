/* eslint-disable prettier/prettier */

import { Operacion_Interface } from "src/shared/types"

export interface Context_Interface {
  data: {
    saldo: {data:number,state:React.Dispatch<React.SetStateAction<number>>    }
    operaciones: Operacion_Interface[];
  }
}
