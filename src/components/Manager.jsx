import React from 'react'
import { useRef,useState,useEffect } from 'react'
  
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const ref = useRef()
    const passwordRef=useRef()
    const[form,setform]=useState({site: "", username: "",password: ""})
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() =>{
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if(passwords){
            setpasswordArray(JSON.parse(passwords))
        }
        else{
            passwordArray = []
        }

    },[]) 
    
      
     
        

    const showpassword = () => {
        passwordRef.current.type ="text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/crosseye.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type="text"
            ref.current.src = "icons/crosseye.png"
        }
    }
    const savepassword = () => {
        if(form.site.length >3 && form.username.length >3 &&form.password.length >3)
        setpasswordArray([...passwordArray,{...form,id:uuidv4()}])
        localStorage.setItem("password", JSON.stringify([...passwordArray,{...form, id:uuidv4()}]))
        console.log(...passwordArray, form)
        setform({site:"",username:"",password:""})
    }

    const deletepassword = (id) => {
        console.log("deleting password with id", id)
        let c =confirm("Do you really want to delete this password?")
        if(c){
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
        }
    }
    const editpassword = (id) => {
        console.log("deleting password with id", id)
        setform(passwordArray.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        
    }
    const handleChange =(e) => {
        setform({...form, [e.target.name]: e.target.value})
    }
    
  return (
    <>
    
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-green-300 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div> 
    </div>
    <div className ="max-auto p-3 md:mycontainer min-h-[88.2vh]">
        <h1 className ='text-4xl text font-bold text-center'>
        <span className='text-green-700'> &lt;</span>
        
        <span>pass</span><span className='text-green-500'>OPP/&gt;</span>

        </h1>
        <p className='text-green-900 text-lg text-center'>your own password manager </p>
    <div className=" flex flex-col p-4 text-black gap-8 items-center">
        <input value={form.site} onChange={handleChange} placeholder='Enter website url' className='rounded-full border  border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
        <div className="flex md:flex-col flex-row w-full justify-between gap-8">
        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border  border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
        <div className="relative">

        <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border  border-green-500 w-full p-4 py-1' type="password" name="password" id="password" />
        <span className='absolute right-[3px] top-[9px] cursor-pointer' onClick={showpassword}>
            < img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />

        </span>
        </div>
        </div>
        <button onClick={savepassword} className='flex justify-center items-center bg-green-400 hover:bg-green-500 rounded-full px-4 py-2 w-fit border border-green-950'>
        <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover">
        </lord-icon>
        Add Password</button>
    </div>
    <div className ="passwords">
        <h2 className='font-bold text-2xl py-4'> your passwords</h2>
        {passwordArray.length == 0 && <div> No passwords to show</div>}
        {passwordArray.length !=0 &&<table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-2'>site</th>
      <th className='py-2'>username</th>
      <th className='py-2'>password</th>
      <th className='py-2'>Action</th>
      <th className='py-2'>Edit</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
     {passwordArray.map((item,index)=>{
        return <tr key={index}>
            <td clsssNAme='justify-center px-2 py-2 border border-white text-center '><a href={item.site} target='_blank'>{item.site}</a></td>
            <td clsssNAme='justify-center px-2 py-2 border border-white text-center '>{item.username}</td>
            <td clsssNAme='justify-center px-2 py-2 border border-white text-center '>{item.password}</td>
            <td className='justify-center py-2 border border-white text-center'>
                <span className='cursor-pointer' onClick={()=>{deletepassword(item.id)}}>
                    <lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    style={{"width":"25px", "height":"25px"}}>
                        </lord-icon>
                </span>
            </td>
            <td className='justify-center py-2 border border-white text-center'>
                <span className='cursor-pointer' onClick={()=>{editpassword(item.id)}}>
                    <lord-icon
                    src="https://cdn.lordicon.com/gwlusjdu.json"
                    trigger="hover"
                    style={{"width":"25px", "height":"25px"}}>
                        </lord-icon>
                </span>
            </td>

        </tr>
     })}
  </tbody>
</table>}
    </div>
    </div>
    </>
  )
}

export default Manager
