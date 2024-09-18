/* eslint-disable prettier/prettier */

const useDeleteOperacion = async (id:number) => {
  try {
    const response = await window.context.deleteOperacion_By_Id(id)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useDeleteOperacion