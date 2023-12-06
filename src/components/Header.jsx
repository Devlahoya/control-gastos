import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ 
    gastos,
    setGastos,
    presupuesto, 
    setPresupuesto, 
    presupuestoAdicional,
    setPresupuestoAdicional,
    isValidPresupuesto, 
    setIsValidPresupuesto 
}) => {
    return (
        <header>
            <h1>Budget Control</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto 
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    presupuestoAdicional={presupuestoAdicional}
                    setPresupuestoAdicional={setPresupuestoAdicional}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ) : (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto }
                />
            )}

        </header>
    )
}

export default Header
