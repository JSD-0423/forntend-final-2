import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const useAxios = (url) => { 
    const [data,setData]=useState([])
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    
    useEffect(()=>{
        const getData=async()=>{
            const response=await axios.get(url)
                setData(response.data.data)
        }
        getData()
    },[url])
    return [data,setData]
}

export default useAxios