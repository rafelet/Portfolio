import * as React from "react"

const Planets = ({planets}) => {
    return (
        <div className='solar'>
        {
            planets.map((e)=>{ 
                return (
                    <React.Fragment key={e.nombre}>
                        <div className='solar_systm' >
                            <div className={`planet ${e.nombre}`} style={{background:`url('${e.img}')`}}>
                                <div className={`planet_description ${e.nombre}`}>
                                    <h2>{e.celestialObjectName}</h2>
                                    <h1>{e.nombre}</h1>
                                    <p>{e.description}</p>
                                    <label htmlFor={`read${e.nombre}`}>
                                        <a> Ver Idea </a>
                                    </label>
                                </div>
                                <div className='overlay'></div>
                            </div>
                        </div>
                    </React.Fragment>
                )
                    
            })
        }
        </div>
    );
}
 
export default Planets;