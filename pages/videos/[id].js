import React from 'react'
import { useRouter } from 'next/router'

const Video = () => {
    const router = useRouter()
    const { id } = router.query
  return (
    <div>Video {id}</div>
  )
}

export default Video