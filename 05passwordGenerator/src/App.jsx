import { useState ,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  //useRef Hook
  const passwordRef=useRef(null);

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+=-{}[]|;':\",.<>/?";

    for (let i = 1; i <= length; i++) {
      const char=Math.floor(Math.random()*str.length+1);

      pass+=str.charAt(char);
      
    }
    setPassword(pass);
    
  },[length,numAllowed,charAllowed,setPassword]);

  const copyToClipBord=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto px-4  py-3 my-8 bg-gray-700 rounded-lg text-orange-600 shadow-lg '>
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
           type='text'
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnlynly
           ref={passwordRef}
          />
          <button onClick={copyToClipBord} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex  text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{setNumAllowed((prev)=>!prev);

            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{setCharAllowed((prev)=>!prev);

            }}
            />
            <label htmlFor='charInput'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
