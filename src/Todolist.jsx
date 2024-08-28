
const Todolist = ({items,handleCheck,handleDelete}) => {
  return (
    <>
    {(items.length) ? (
          <ul
          className="ul"
          >
          {items.map((item)=>(
            <li key={item.id}>
            <input 
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={()=>handleCheck(item.id)}
                  />
            <label htmlFor={item.id} >
                      {item.task}
            </label>
            <button
            onClick={()=>{handleDelete(item.id)}}
            >X</button>
            </li>
          )
          )}
          </ul>
        ) : ( 
        <p
        style={{
          position:'absolute',
          marginTop:'11rem',
          fontWeight:'500',
          color:'white',
          letterSpacing:'.5px',
          wordSpacing:'3px',
          fontSize:'20px',
          backgroundColor:'transparent'
        }}
        >
          The list is empty</p>
        )     
        }
    </>
  )
}

export default Todolist