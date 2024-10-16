import { useQuery } from "@apollo/client"
import { GetUsersDocument } from "../../graphql/generated"

export const Home = () => {
    const { data, loading } = useQuery(GetUsersDocument)

    return <div>{loading ? "Wait" : data?.users?.[0].name}</div>
}