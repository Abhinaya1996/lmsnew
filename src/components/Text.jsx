// styles, inline styles, importing css from external css stylesheets
import Heading from './Heading';
import './Text.css';
function Text(){
    return(<div className="textcontainer" style={{backgroundColor:"red",
        color:"white"
    }}>sample text
    <Heading/>
    </div>)
}
export default Text;