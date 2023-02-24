import React from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'

export default function TableOrden({ index, orden, onDelete }) {
    const [edit, setEdit] = React.useState(false)
    const [data, setData] = React.useState(orden)
    const [newData, setNewData] = React.useState(data)

    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleDelete = () => {
        //llamar a la accion que elimine el registros
        onDelete(index)
    }

    const mostrar = () => {
        console.log(data);
    }

    const handleCancel = () => {
        setData({
            ...data,
            estado: 'cancelado'
        })
        console.log(data);
    }

    return (
        <>
            <td>{data.id} </td>
            <td>{data.producto} </td>
            <td>{data.cantidad} </td>
            <td>{data.fecha} </td>
            <td>{data.direccion} </td>
{/*             <td>{data.costo} </td>
 */}            <td>{data.estado} </td>
            <td>
                {index === 0 ?
                    <>
                        <Button variant="light">
                            <FcCancel className='iconAction' onClick={handleCancel} />
                        </Button>
                    </>
                    :
                    <Button variant="light">
                        <AiOutlineDelete className='iconAction' onClick={handleDelete} />
                    </Button>
                }
            </td>
        </>
    )
}
