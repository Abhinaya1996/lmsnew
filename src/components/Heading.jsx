// styled components, css modules
import styles from './Heading.module.css';
import style from 'styled-components';

function Heading() {
    const StyledH1 = style.h1`
    color:red;
    font-size: 50px;
    `;
    const StyledDiv = style.div`
    color:blue;
    background-color: yellow;
    font-size: 20px;
    `;
    //     return <h1 className={styles.textcontainer}>Welcome to React</h1>
    return (<StyledDiv>
        <p>helloworld</p>
        <StyledH1>Welcome to React</StyledH1>
    </StyledDiv>
    )
}
export default Heading;