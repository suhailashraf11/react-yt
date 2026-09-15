import React from 'react'
const Card = (props) => {
    console.log(props.user, props.age);
  return ( 
        <div className="card">
        <h1>{props.user} {props.age}</h1>
        
        <img src={props.img} alt="React" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae dignissimos commodi. Deserunt rem possimus id delectus assumenda facere quasi tempore quia architecto cupiditate commodi, doloribus sunt accusamus facilis dolore!</p>
        <button>View Profile</button>
      </div>
  )
}
export default Card
