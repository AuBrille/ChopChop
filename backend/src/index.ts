import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from './schema'
 
function main() {
  const yoga = createYoga({ schema })
  const server = createServer(yoga)
  server.listen(4001, () => {
    console.info('Yoga: Server is running on http://localhost:4001/graphql')
  })
}
 
main()