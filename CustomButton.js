import '../App.css';


function CustomButton(props) {
    return ( 
        
                <button onClick={props.click} className='btn' stype={{backgroundColor:props.bg, color:props.color}}>
                    {props.name}</button>
          
     );
}

export default CustomButton;
