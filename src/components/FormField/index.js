import React from 'react'

function FormField({ label, type, name, valor, onChange }) {
    return(
        <div>
            <label>
            {label}  
            <input 
                type={type}
                value={valor}
                name={name}
                onChange={onChange}
            />
            </label>
        </div>
    )
}
export default FormField


/*      Forma inicial
<label>
    Nome da Categoria:  
    <input 
    type="text"
    value={valores.nome}
    name="nome"
    onChange={handleChange}
    />
</label>
*/
