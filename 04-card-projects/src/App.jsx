

import Card from "./Components/Card.jsx";


const App = () => {
  const jobOpenings = [
    
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGAxmwkCKXPl026zLJcJcFZu6Rqqs4EeMguLhOjKfmg&s=10",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Mountain View, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWhQy0735LhTmx8IrB-I6yWYdEqe-wXLmqwxD32JWHw&s=10",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "Cloud Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpX6LLQ-9ZQ1Cr8B42xUu30zZS3jD_W_qP6m3qHTPWQ&s=10",
      companyName: "Microsoft",
      datePosted: "7 days ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$70/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaKUVn5dhv3d0iz1kwhaR_zqbUUjIHQKpklFBNbLvKg&s=10",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://cdn.vectorstock.com/i/1000v/63/03/apple-logo-icon-vector-26936303.jpg",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo-png.png",
      companyName: "IBM",
      datePosted: "6 days ago",
      post: "AI Researcher",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hour",
      location: "Armonk, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXv5qkRcbdrf3AlxN9MKF_1kALmrK0wc9PMTbsRWK2g&s=10",
      companyName: "Spotify",
      datePosted: "2 days ago",
      post: "Audio Systems Engineer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$55/hour",
      location: "Stockholm, Sweden"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHpZugauJDW5HcmTr_VxTN8dtpbzjayLWFYj50m3BaQ&s=10",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "Graphics Programmer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "San Jose, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoqkgsg5pCaEejdJcIV8lCqtZ3MWu30Ix3z9YnrqFJA&s=10",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hour",
      location: "Palo Alto, USA"
    }
  ];

  console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
            <Card company ={elem.companyName} 
                     post={elem.post}
                     datePosted ={elem.datePosted}
                     brandLogo ={elem.brandLogo}
                     tag1 ={elem.tag1}
                     tag2= {elem.tag2}
                     pay= {elem.pay}
                     location= {elem.location}
              

                     
                     
                     
                     />
        </div>

        })
      }
     
    </div>

    
  )
}

export default App
