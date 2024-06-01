import { Skeleton } from "@mui/material"

interface LoadingProps {
    loading?: boolean
}

export const Loading = (props: LoadingProps) => {

    return (
        <Skeleton animation="wave" variant="rectangular" width={640} height={480} />
    )
}