import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {


    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filters</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value) }
                    >
                        <option value="">-- All--</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="others">Other</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="suscriptions">Suscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
