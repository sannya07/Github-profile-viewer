import React, { useEffect, useState } from 'react'

function Viewpage({data}) {

    const [repoinfo,setrepoinfo]= useState(null);
    const [userinfo, setData]= useState(null);

    useEffect(()=>{
      if(data){  
      fetch(`https://api.github.com/users/${data}/repos`)
        .then(response=> response.json())
        .then(data=> setrepoinfo(data))
        .catch(error=> console.error(error))
      }
    },[data])

    useEffect(()=>{
      if(data){
      fetch(`https://api.github.com/users/${data}`)
      .then(response=> response.json())
      .then(data=> setData(data))
      .catch(error=> console.error(error))
      }
  },[data])

  if(!userinfo){
      return 
  }
  if(!repoinfo){
    return 
}
  return (
    <>
      {/* <div>{userinfo.login}</div> */}
      <div className='flex flex-col md:flex-row bg-[#0d1116] w-full relative'>
        <div className='mt-5 md:w-2/5 flex flex-col  items-center justify-center gap-4 md:h-screen md:sticky md:top-0'>
           <div><img src={userinfo.avatar_url} className="border-2 rounded-full flex items-center" alt="" /></div>
           <div className='text-white text-3xl'>{userinfo.name}</div>
           <div className='text-[#8d96a0] text-2xl'>{userinfo.login}</div>
           <div className='text-white text-center text-xl text-wrap md:px-16'>{userinfo.bio}</div>
           <div className='text-white flex gap-16'>
            <div className='text-[#8d96a0] text-xl'>Followers: {userinfo.followers}</div>
            <div className='text-[#8d96a0] text-xl'>Following: {userinfo.following}</div>
           </div>
        </div>
        <div className='w-3/5 '> 
            {repoinfo.map((items, i)=>(
                <div key={i} className='text-[#8d96a0]'>
                    <div className='flex top-2 border-[#8d96a0] p-5 m-5 justify-between rounded'>
                    <div className='flex flex-col'>
                      <div className='text-[#4493f8] text-2xl'><a href={items.html_url}>{items.name}</a></div>
                      <div className='text-wrap'>{items.description}</div>
                      <div>{items.language} 🎭</div>
                      <div className='flex gap-16'>
                        <div>Day of creation: {items.created_at}</div>
                        <div>Day of updation: {items.updated_at}</div>
                      </div>
                    </div>
                    <div className='pl-14'>
                      <div>forks: {items.forks_count}</div>
                      <div>stars: {items.stargazers_count}</div>
                    </div>
                    </div>
                    <div className='text-[#e1e2e4]'>< hr /> </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Viewpage
