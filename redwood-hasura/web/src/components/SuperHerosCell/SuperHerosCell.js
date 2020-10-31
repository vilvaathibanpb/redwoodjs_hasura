export const QUERY = gql`
  query getSuperHeros {
    superhero_aggregate {
      nodes {
        name
        team {
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ superhero_aggregate }) => {
  return (
    <div>
      {superhero_aggregate.nodes.map((hero) => (
        <li>{hero.name} - {hero.team.name}</li>
      ))}
    </div>
  )
}
