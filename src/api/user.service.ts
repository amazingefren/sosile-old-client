import {gql} from '@urql/core'

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!){
    login(data: $input)
  }
`

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!){
    register(data: $input) 
  }   
`
