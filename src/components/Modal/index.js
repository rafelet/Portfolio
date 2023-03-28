import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import "../../styles/modal.scss"

const MakeImageModal = ({src}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
    return ( 
        <>
        <img
          src={ src }
          onClick={ () => openImageViewer(0) }
          className="img1"
          alt=""
        />
    
        {isViewerOpen && (
            <ImageViewer
                src={ [src] }
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
            />
        )}
        </>
     );
}
 


const Modal = ({planets}) => {
    
    const makeResume = (e)=>{
        return (
            <div className='panel'>       
                <h1>{e.nombre}</h1> 
                {/* <MakeImageModal src={e.img}></MakeImageModal>
                     */}
                <div className="basicscont">
                    <div className="basicsleft"><img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"/></div>
                    <div className="basicsright">
                        {/* <span className="plottraits">CONFIDENT</span> */}
                        <p>
                           Pararrayos, atrapasueños, cogebalas, subemontañas, escribetodo, piensacosas, copywriter.

                        </p>
                    </div>
                </div>
                
                
                <div className="plotbasics">
                    <div className="plotdivider">Trayectoria Profesional</div>
                    <ul className="social-skills">
                        <li><span className="bolder">2022</span> Prácticas Universitarias: JLC Creativos Asesores</li>
                    </ul>
                    <div className="plotdivider">Trayectoria Académica</div>
                    <ul className="social-skills">
                        <li><span className="bolder">2022-2023</span> Zink Project: Master en Copywriting</li>
                        <li><span className="bolder">2018-2022</span> Universidad de Alicante: Grado en Publicidad y RRPP</li>
                    </ul>
                </div>
            </div>
        )
    }
    const makeProyect = (e)=>{
        return (
            <div className='panel'>       
                <h1>{e.nombre}</h1> 
                {
                    e.img 
                    ? <MakeImageModal src={e.img}></MakeImageModal>
                    : <video width="80%" height="auto" controls>
                        <source src={e.video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                }
                                    
                {/* <div className="plotdivider">BASICS</div>
                <div className="plotbasics">
                    <p>
                    A task board assassin with seemingly few morals, Alex is the perfect soldier. He never questions orders, no matter what he’s told to do, and work is always the main priority in his life.
                
                Or, at least, he’s trying to convince himself he is. He’s unhealthily obsessive about making sure everything is perfect, and takes it as a personal failure when anything goes wrong. He’s struggled with feeling good enough his all life, though his main critic has always been himself, and he hides his insecurities and crippling lack of self confidence behind a veneer of confidence and arrogance. He’s got so good at pretending that he almost believes it himself.
                    </p>
                
                </div> */}
            </div>
        )
        
    }
    return ( 
         planets.map((e)=>{ 
                return (
                    <React.Fragment key={e.nombre}>
                        <input className='read' id={`read${e.nombre}`} name={`${e.nombre}read`} type='radio'/>
                        <label className='closeBig' htmlFor={`close${e.nombre}`}></label>
                        <input className='read' id={`close${e.nombre}`} name={`${e.nombre}read`} type='radio'/>
                        {
                            e.type ==="about"
                                ? makeResume(e)
                                : makeProyect(e)
                        }
                    </React.Fragment>
                )        
            })
     );
}

export default Modal;