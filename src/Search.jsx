
const Search = ({addItem,setAddItem,search,setSearch,handleAdd}) => {
  return (
    
    <form 
    className="form"
    onSubmit={handleAdd}
    >
      <span>
      <label htmlFor="inn"></label>
    <input
    autoFocus
    id='inn'
    type="text"
    required
    value = {addItem}
    onChange = {(e)=>
      setAddItem(e.target.value)
    }
    />
      <button
      className="addbtn"
      type='submit'
      // onClick={handleAdd}
      >Add</button>
      </span>

      <input
      id="search"
       type="search"
       value={search}
       onChange={(e)=>{setSearch(e.target.value)}}
       />
      </form>
  )
}

export default Search