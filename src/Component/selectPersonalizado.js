import React,{useState} from 'react';

export default function selectPersonalidado({option, myChangeHandler, nameCampo, valorCampo, loadError}){
    // const recebeOptions = option;

// console.log(option)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActiveSelectLaborBond, setIsActiveSelectLaborBond] = useState(false);
    async function SelectLaborBond() { setIsActiveSelectLaborBond(!isActiveSelectLaborBond) }
    return (
        <>
        <div className="select-busca-btn">
            <button 
                className={loadError && loadError === true ? "menu-button inputErro" : "menu-button"}
                onBlur={ () => (setIsActiveSelectLaborBond(false)) }
                onClick={ SelectLaborBond }
            >
                <span>
                {valorCampo && valorCampo !== undefined ? valorCampo.val : "Selecione"}

                </span>
            
            </button>
            <nav className={`menu ${isActiveSelectLaborBond ? "ativo": ""}`} >

             
                    <ul>
                        {
                            option.map((optionIntem, index) => (
                                <>
                                    <li key={index}>
                                        <button 
                                        value={optionIntem}
                                        name={nameCampo}
                                        onClick={myChangeHandler}
                                        >{optionIntem}</button>
                                    </li>
                                </>
                            ))}
                    </ul>
            </nav>
        </div>
        
        
        </>
    )
}