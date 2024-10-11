
function App()
{ 
  let arr=["orange","apple","banana"];
  return (
    <>
  
<ul className="list-group">
   {arr.map((item,index)=>{
    
  return <li key={index} className="list-group-item">{item}</li>
   })} 
</ul>

</>
  ) 
}

export default App;
