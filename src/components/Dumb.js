import {Image, Container, Row} from 'react-bootstrap'

function Layout (state, React)
{
    return (
        <>
            <Container>
                
            {state.allNewPhoto.length ? (
               <>                   
                <br/>                
                    <Row>                  
                    
                    {state.allNewPhoto.map((photo, index) => (
                        <div key={index} style={{padding: 10}}> 
                               
                         <Image  src={photo.download_url} width="300px" alt='' rounded  /><br/><br/>
                          
                        </div> 
                    ))}  

                    </Row>                
                </>
            ):
            <Container>
                <div className="row h-100">
                <div className="col-sm-12 align-items-center my-auto">
                <div className="w-25 mx-auto">
                <img src="https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif"  width=""/>
                </div>
                </div>
                </div>
                </Container>

            
            }

            </Container>

            <Container>

            <div className="row h-100">
                <div className="col-sm-12 align-items-center my-auto">
                    <div className="w-25 mx-auto">
                        <img className="center" src="https://image.flaticon.com/icons/svg/1177/1177530.svg" width="50" onClick={() => handleClick()} alt=""/>
                    </div>
                </div>
             </div>

            </Container>
        </>
    )
}

export default Layout