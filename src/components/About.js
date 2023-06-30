import axios from "axios"

const response = await axios.get(
  "https://jsonplaceholder.typicode.com/posts?_limit=10"
);

function About(props) {
  const pStyle = { color: 'green', fontSize: '11px', textAlign: 'justify' }
  console.log(response.data)

  return (
    <about className="App-header1">
      <h3>About </h3>

      {response.data.map(data => (
        <p style={pStyle}>{data.title}</p>
      ))}

    </about>
  );
}

export default About;
