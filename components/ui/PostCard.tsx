import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'

const PostCard = ({body,title}:{body:string,title:string}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {body}
        </CardContent>
      </Card>
    </div>
  )
}

export default PostCard