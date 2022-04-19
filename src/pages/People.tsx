import React, { useContext, useEffect, useState } from 'react'
import {
    useQuery,
    gql
  } from "@apollo/client";
import { Person as PersonType } from '../types';
import { PageContext } from '../App';
import Person from '../components/PersonCard';
import { GET_PEOPLE, GET_PEOPLE_COUNT } from '../graphql/queries';


const People = () => {
    const {page, next, prev, set} = useContext(PageContext)
    const [hasMore, sethasMore] = useState(true)
    const [pages, setPages] = useState<number[]>([])

    const {loading, error, data, refetch} = useQuery<{people: PersonType[]}>(GET_PEOPLE, {variables: {page}})
    const { data: count} = useQuery<{count: number}>(GET_PEOPLE_COUNT)

    useEffect(() => {
        refetch({page})
    }, [page])

    useEffect(() => {
        sethasMore(data?.people?.length === 10)
    }, [data?.people])

    useEffect(() => {
        let i = 1, c = count?.count || 0
        let arr = []
        while(c > 0){
            arr.push(i++)
            c =  c -= 10
        }
        setPages(arr)
    }, [count])

    if(error){
        return (
            <div>
                An error occurred
            </div>
        )
    }

    return (
        <div className='people'>
            <h4 className='heading'>People</h4>
            {loading && <p>Loading....</p>}
            {
                !loading && (
                    <>
                        <ul>
                            {
                                data?.people?.map((person, i) => {
                                    return (
                                        <Person key={i} person={person} />
                                    )
                                })
                            }
                        </ul>
                        <span><button disabled={page === 1} onClick={prev}>prev</button></span>
                        {
                            pages.map(p => <span key={p}><button className={page === p ? 'active': ''} onClick={() => set(p)}>{p}</button></span>)
                        }
                        <span><button disabled={!hasMore} onClick={next}>next</button></span>
                    </>
                )
            }
        </div>
    )
}

export default People
