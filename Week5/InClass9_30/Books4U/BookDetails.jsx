import React, {use} from 'react'
function BookDetails(props){
    const {id} = useParams()
    return(
      <div>Here are your details id ={id}</div>
    );
}