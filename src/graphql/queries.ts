import { gql } from "@apollo/client";

const GET_PEOPLE = gql`
  query Query($page: Int){
    people(page: $page){
      name
    }
  }
`

const GET_PERSON = gql`
    query Query($search: String){
      search(search: $search){
        name
        height
        mass
        gender
        homeworld {
          name
          climate
        }
      }
    }
  `

const GET_PEOPLE_COUNT = gql`
    query Query{
      count
    }
  `

export {
    GET_PEOPLE,
    GET_PERSON,
    GET_PEOPLE_COUNT
}