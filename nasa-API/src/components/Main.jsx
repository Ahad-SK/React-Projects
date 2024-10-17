function Main(props)
{
    const {data}=props
    return(
        <div className="bgimgcontainer">
    <img src={data?.hdurl} alt="Mars pic "className="bgimage" />
    </div>
    )
}
export default Main