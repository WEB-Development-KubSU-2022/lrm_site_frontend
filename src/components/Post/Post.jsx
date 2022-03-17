import React from 'react'

import { Container, Text, Divider, Group, Badge } from '@mantine/core'

import styles from './PostStyle.module.css'

const Post = ({ postData }) => {
    return (
        <Container className={styles.post}>
            <Group >
                <Text size='xl'>{postData.title}</Text>
                {/* {postData.userId.map(tagName => <Badge color='pink'>{tagName}</Badge>)} */}
                
            </Group>
            <Divider />
            <Text>{postData.body}</Text>
        </Container>
    )
}

export default Post