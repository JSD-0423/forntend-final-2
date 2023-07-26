import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const useAxios = (url) => { 
    const [data,setData]=useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        
        const getData=async()=>{
            try{
                const response=await axios.get(url)
                setData(response.data.data)
            }catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
            
        }
        getData()
    },[url])
    return [data,loading,error]
}

export default useAxios