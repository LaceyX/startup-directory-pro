import React from 'react'
import { STARTUPS_BY_USER_QUERY } from "@/sanity/lib/queries";
import { client } from '@/sanity/lib/client';
import StartupCard, { StartupTypeCard } from './StartupCard';

const UserStartups = async ({id}: {id:string}) => {

  const startups = await client.fetch(STARTUPS_BY_USER_QUERY,{id})

  return (
    <>
      {startups.length > 0 ? startups.map((startup: StartupTypeCard) => {
        return <StartupCard key={startup._id} post={startup} />
      }):(
        <p className='no-results'>No post yet</p>
      )}
    </>
  )
}

export default UserStartups
