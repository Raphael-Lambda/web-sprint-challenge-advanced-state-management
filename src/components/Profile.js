import React from 'react'
import { useParams } from "react-router"
import { connect } from 'react-redux'

const Profile = ({ smurfsList }) => {
    const idParam = useParams()
    console.log('idParam', idParam)
    console.log(smurfsList)
    const smurf = smurfsList.filter(smurf => smurf.id === idParam.id)[0]
    return(
        <>
        <div className="card">
            <h2>{smurf.name}</h2>
            <h3>Position: {smurf.position}</h3>
            <h3>Nickname: {smurf.nickname}</h3>
            <p>{smurf.description}</p>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return({
        smurfsList: state.smurfsList,
    })
}
export default connect(mapStateToProps)(Profile)