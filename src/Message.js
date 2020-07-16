import React, { forwardRef } from 'react'
import { Typography, Card, CardContent } from '@material-ui/core';


const Message = forwardRef(({ userName, message }, ref) => {
    const isUser = userName === message.userName
    console.log(isUser);

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!message.userName && `Unknown User:`} {!isUser && `${message.userName}:`} {message.message}</Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
