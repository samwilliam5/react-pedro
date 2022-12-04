import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


const ReactQueryTanstack = () => {

    const {data,isLoading,isError,refetch} =useQuery([{}],()=>{
      return axios.get('https://random-data-api.com/api/v2/users')
      .then((res)=>
         console.log(res.data)
      
      )
    })

    if(isLoading){
        return <h3>Loading....</h3>
    }
    if(isError){
        return <h3>Error while Loading....</h3>
    }

  return (
    <h1>
      {/* {data.map((list,index)=>
         <p key={index}>{list.first_name}</p>
      )} */}
      {data}
      <button className="btn btn-success" onClick={refetch}>Update Data</button>
      </h1>
  )
}


export default ReactQueryTanstack
