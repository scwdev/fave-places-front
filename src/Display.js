import React from "react";

const Display = (props) => {
  const { places } = props

  const loading = () => {
    return (
      <h1> Loading... </h1>
    )
  }

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {places.map(( place ) => (
        <article>
          <img src={ place.img } />
          <h1>{ place.name }</h1>
          <h3>{ place.description }</h3>
          <button onClick={() => {
            props.selectPlace( place )
            props.history.push( "/edit" )}}>
            Edit
          </button>
          <button style={{"background-color": "aquamarine"}}onClick={() => {
            props.deletePlace( place )
            props.history.push( "/" )}}>
            Delete
          </button>
        </article>
      ))}
    </div>
  )

  return places.length > 0 ? loaded() : loading()
};

export default Display;
