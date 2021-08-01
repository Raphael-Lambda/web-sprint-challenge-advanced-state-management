import React from 'react';
import { useHistory } from 'react-router';

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//

const Smurf = (props)=> {
    const history = useHistory()
    const { smurf } = props;
    
    return(<div data-testid="smurf" className="card">
        <div className="card-body">
        <button onClick={() => history.push(`/profile/${smurf.id}`)}><h3 className="card-title">{smurf.name}</h3></button>
            <hr/>
            <p className="card-text"><b>Position:</b> {smurf.position}</p>
            <p className="card-text"><b>Nickname:</b> {smurf.nickname}</p>
            <p className="card-text"><b>Description:</b> {smurf.description}</p>
        </div>
    </div>);
}

export default Smurf;