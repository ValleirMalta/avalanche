import React,{useState} from 'react';

export default function selectPersonalidado({option}){
    // const recebeOptions = option;

// console.log(option)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActiveSelectLaborBond, setIsActiveSelectLaborBond] = useState(false);
    async function SelectLaborBond() { setIsActiveSelectLaborBond(!isActiveSelectLaborBond) }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loadLaborBond, ] = useState(false);
    return (
        <>
        <div className="select-busca-btn">
            <button 
                className={loadLaborBond ? "menu-button inputErro" : "menu-button"}
                onBlur={ () => (setIsActiveSelectLaborBond(false)) }
                onClick={ SelectLaborBond }
            >
                <span>
                Selecione

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
                                        name="optionIntem"
                                        // onClick={myChangeHandler}
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