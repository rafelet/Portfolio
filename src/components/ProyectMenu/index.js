import * as React from "react"

const MakeCustomTitleImageReveal = ({data}) => {
    const ref = React.useRef(null);
    const imgRef = React.useRef(null);
    function move (e){
        // imgRef.current.style.top = e.clientY + 'px'
        imgRef.current.style.left = e.clientX + 'px'
    }
    function leave (e){
        ref.current.style.zIndex = 1
        imgRef.current.setAttribute('src', '')
    }
    function over (e){
        let imageData = data.img
        ref.current.style.zIndex = 99
        if (imageData) {
            imgRef.current.setAttribute('src', imageData)
        }
    }
    return ( 
        <React.Fragment>
            <img ref={imgRef} src="" className="image-reveal"></img>
            <div className='info'
                ref={ref}
                onMouseMove={(e)=>move(e)}
                onMouseOver={(e)=>over(e)}
                onMouseLeave={(e)=>leave(e)}
            >
                <h2>
                    <div className='pip'></div>
                    {data.nombre}
                </h2>
                {/* <h3>{data.au}</h3> */}
            </div>
            
        </React.Fragment>
        
     );
    // function showImgContent(e) {onMouseMove={(e)=>showImgContent(e)}

    //     let x = e.clientX;
    //     let y = e.clientY;
    //     ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    // }
    // return ( 
    //     <React.Fragment>
    //         <div className='info link' onMouseMove={(e)=>showImgContent(e)}>
    //             <h2>
    //                 <div className='pip'></div>
    //                 {data.nombre}
    //             </h2>
    //             <h3>si</h3>
    //         </div>
    //         <span className="hover-container">
    //             <span className="image-container">
    //             <span className="image-inner">
    //                 <img  ref={ref} className="link-image" src={data.img} alt="Tokyo Tower" />
    //             </span>
    //             </span>
    //         </span>
    //     </React.Fragment>
        
    //  );
}
 


const ProyectMenu = ({planets}) => {
    

    return (

        planets.map((e)=>{ 
            return (
                <React.Fragment key={e.nombre}>
                    <input defaultChecked className={`planet${e.num}`} id={`${e.nombre}`} name='planet' type='radio'/>
                    <label className={`menu ${e.nombre}`} htmlFor={`${e.nombre}`}>
                        <div className='preview' style={{background:`url('${e.mini}')`}}></div>
                        <MakeCustomTitleImageReveal data={e}/>
                        
                    </label>
                </React.Fragment>
            )
                
        })
    );
}
 
export default ProyectMenu;