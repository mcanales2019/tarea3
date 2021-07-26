import React, {useState} from 'react' 

export const ListTipoDoc = () => {

    const estadoInicial = ['FUN', 'ANEXO','CARTA-RENUNCIA','REVOCACION','GES']

    const [lista, setLista] = useState (estadoInicial)

    return (

        <div>

            <h3>Lista tipo de documentos</h3>

           {

               lista.map( (item, index) => (

                   <h4 key= {index} >{item} </h4>

               ))

           }

        </div>

    )

}