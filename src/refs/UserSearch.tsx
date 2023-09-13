import React , {useState , useRef , useEffect} from 'react'

const users = [
    {name:'Sarah' , age :20},
    {name: 'Tina' , age: 45},
    {name: 'Piya' , age: 15}
]

const UserSearch: React.FC = () => {
    const [name , setName] =  useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [found , setFound] = useState<string | {name :string , age:number}>('')
    const finduser = () => {
        const data = users.find((item) => item.name === name)
        data === undefined ? setFound('Not found') : setFound(data)
        setName('')
    }
    useEffect(() => {
        if(!inputRef.current){
            return;
        }
      inputRef.current?.focus()
    },[])
  return (
    <div>
        <h3>User Search</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={inputRef}/>
        <button onClick={finduser}>Find</button>
        <div>
            {
            typeof found === 'string' ? 
            found 
            : <div>
                <p>name : {found.name} age: {found.age}</p>
                

                </div>
            }
        </div>
    </div>
  )
}

export default UserSearch