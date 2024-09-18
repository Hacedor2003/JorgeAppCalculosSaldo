/* eslint-disable prettier/prettier */

const useDeleteSaldo = async () => {
  try {
    return await window.context.deleteSaldo()
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useDeleteSaldo
