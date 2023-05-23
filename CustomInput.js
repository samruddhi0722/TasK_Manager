import '../App.css';


function CustomInput(props) {
    return ( 
        
            <div className='inputwrapper'> 
                <label>{props.label}</label>
                <input className='inputForm' placeholder={props.placeHolder} onChange={props.change}/>

            </div>
          
     );
}

export default CustomInput;
