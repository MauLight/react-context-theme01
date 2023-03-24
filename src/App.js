//import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import { Section } from './components/Section';

export default function ProfilePage() {

  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

const AllPosts = () => {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body=" I loved it!"
      />
    </Section>
  );
}

const Post = ({ title, body }) => {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}


