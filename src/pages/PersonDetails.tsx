import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Person } from '../types'
import {  useNavigate, useSearchParams } from 'react-router-dom'
import { GET_PERSON } from '../graphql/queries'
import PersonInfo from '../components/PersonInfo'

const PersonDetails = () => {
  const [searchParams,] = useSearchParams()
  const navigator = useNavigate()
  const { loading, error, data, refetch } = useQuery<{ search: Person[] }>(GET_PERSON, { variables: { search: searchParams.get('name') } })
  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
    refetch()
  }, [searchParams.get('name')])
  
  useEffect(() => {
    setPerson(data?.search[0]!)
  }, [data])

  if (error) {
    return (
      <div className='people'>
        <div className="heading">An error occurred</div>
      </div>
    )
  }


  return (
    <div className='people'>
      <div>
        <button onClick={() => navigator(-1)}>
          Back
        </button>
      </div>
      {loading && <span>Loading....</span>}
      {
        !loading && person && (
          <>
            <PersonInfo person={person} />
          </>
        )
      }
    </div>
  )
}

export default PersonDetails