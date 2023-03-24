import { useContext, useState } from 'react';
import './App.css';
//import Heading from './components/Heading';
import { places } from './components/places';
import { SizeContext } from './components/SizeContext';
//import { Section } from './components/Section';
import { getImageUrl } from './utils';

/*

function ProfilePage() {

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

*/

const App = () => {

  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <SizeContext.Provider value={imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => { setIsLarge(e.target.checked) }}
          />
          Use Large Images
        </label>
        <hr />
        <List />
      </SizeContext.Provider>
    </>
  )
}

const List = ({ imageSize }) => {

  const listItems = places.map(place => <li key={place.id} ><Place place={place} /></li>);

  return <ul>{listItems}</ul>;
};

const Place = ({ place }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

const PlaceImage = ({ place }) => {

  const size = useContext(SizeContext);

  return (
    <img src={getImageUrl(place)} alt={place.name} width={size} height={size} />
  );
}

export default App;
