import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useStateValue } from '../StateProvider'
import './Github.css'

import Avatar from '../Common/Avatar/Avatar'

export const Github = ({ username }) => {
    const [{ user }, dispatch] = useStateValue()
    const GET_CURRENT_USER = gql`
    {
        user(login: "${user?.github}") {
          id
          email
          avatarUrl
          createdAt
          name
          repositories(orderBy: {field: CREATED_AT, direction: DESC}, first: 100) {
            edges {
              node {
                id
                createdAt
                name
                url
              }
            }
          }
          url
        }
      } 
    `

    const { loading, error, data } = useQuery(GET_CURRENT_USER)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error {error}</p>

    const GithubTop = ({ avatarUrl, name, joinedDate }) => {
        return (
            <div className="github__top">
                <Avatar className="github__top__avatar" img={avatarUrl} />
                <h2 className="github__top__name">{name}</h2>
                <h4 className="github__top__createdAt">Member since {joinedDate.split('T')[0]}</h4>
            </div>
        )
    }

    const RepositoryCard = ({ name, createdAt, url }) => {
        return (
            <div className="repocard">
                <div className="repocard__items">
                    <h3>{name}</h3>
                    <p>{createdAt.split('T')[0]}</p>
                </div>

            </div>
        )
    }

    const { user: { email, avatarUrl, createdAt, name, url, repositories: { edges } } } = data;
    console.log(edges)

    return (
        <div className="github">
            {!loading && !error &&
                <>
                    <GithubTop avatarUrl={avatarUrl} name={name} joinedDate={createdAt} />
                    <div className="repo">
                        {edges.map(({ node: { name, createdAt, url } }) => (
                            < RepositoryCard name={name} createdAt={createdAt} url={url} />
                        ))}
                    </div>

                </>
            }
        </div>
    )
}


export default Github;