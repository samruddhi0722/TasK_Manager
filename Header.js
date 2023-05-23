import '../App.css';
import CustomButton from './CustomButton';

function Header(props) {
    return ( 
        <div className='header' >
            <h1>Task manager</h1>
            <div className='btnWrapper' >
               <CustomButton click={props.handleInput} name='Add' bg='#adadeb' color='black'/>
            </div>

        </div>
     );
}


export default Header;