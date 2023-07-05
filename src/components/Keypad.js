// Code Keypad Component Here


function Keypad (){
    const passwordSubmit = () => {
        console.log('Entering password...')
    }

    return (
        <form onChange={passwordSubmit}> 
            <input type="password" /> 
        </form>
    )
}

export default Keypad;