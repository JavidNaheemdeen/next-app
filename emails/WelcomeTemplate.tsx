import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
   return (
      <Html>
         <Preview>Welcome aboard</Preview>
         <Body style={ body }>
            <Text style={text}>{name}</Text>
            <Link href="https://nextjs.org/docs"></Link>
         </Body>
      </Html>
   );
};

const body: CSSProperties = {
   margin: 0,
   padding: 0,
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
}

const text : CSSProperties = {
   margin: 0,
   padding: 0,
   width: '100%',
}

export default WelcomeTemplate