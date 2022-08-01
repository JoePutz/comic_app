import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

function ReviewCard( { review }) {


    function stars() {
        const array = []
        for ( let i = 0; i < review.star; i++) {
            array.push(<Icon name="star outline" />)
        }
        return array
    }

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{review.user.username}</Card.Header>
                <div className='stars in a row'>
                    {stars()}
                </div>
                <Card.Description>
                    {review.comment}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ReviewCard