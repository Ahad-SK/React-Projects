function Time(){
    let Time= new Date();
    return <h3>The current date and time is: {Time.toLocaleDateString()} ------ {Time.toLocaleTimeString()}</h3>
}
export default Time;