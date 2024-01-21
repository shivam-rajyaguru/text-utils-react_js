import React , {useState} from 'react'

export default function About (props) {

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black' ,
        backgroundColor : props.mode === 'dark' ? '#468B97' : 'white' , 
        border : '1px solid white'
    }
     
// const [myStyle , mySetStyle] = useState({
//     color : 'black',
//     backgroundColor : 'white'
// })

// const [btnText , setBtnText] = useState('Enable Dark Mode')

// const toggleStyle = () =>{
//     if(myStyle.color === 'black'){
//         mySetStyle({
//             color : 'white',
//             backgroundColor : 'black',
//             border : '1px solid white'
//         })
//         setBtnText('Enabling Light Mode')

//     }
//     else{
//         mySetStyle({
//             color : 'black',
//             backgroundColor : 'white'
//         })    
//         setBtnText('Enable Dark Mode') 
//     }
// }
    
  return (
    <>
    <h3 className='container my-4' style={{color:'#331D2C'}}>About Us</h3> 
    <div className='container'>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Fast Service 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go with accordion-body, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body , though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Efficient
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body , though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container">
        {/* <button type="button" onClick= {toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
        </div>
    </div>
    </>
  )
}
