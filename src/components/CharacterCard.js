import React, {Fragment} from 'react';
import './styles/CharacterCard.css';

class CharacterCard extends React.Component {
    state = {
        modalActivo: false
    }

activarModal () {
    this.setState({
        modalActivo: true
    })
}

desactivarModal (){
    this.setState({
        modalActivo: false
    })
}

render () {
    const { modalActivo } = this.state
    return (

        <Fragment>

            {modalActivo ? (
                <div className="Modal">
                    <div className="containerPrimary">
                        <div className="imageContainer">
                            <img src={this.props.character.image}></img>
                        </div>
                        <div className="informationContainer">
                            <h1>{this.props.character.name}</h1>
                            <div className="informationStyle">
                                <p className="informationStyleTopP">Status:</p>
                                <p>{this.props.character.status}</p>
                            </div>
                            <div className="informationStyle">
                                <p className="informationStyleTopP">Species:</p>
                                <p>{this.props.character.species}</p>
                            </div>
                            <div className="informationStyle">
                                <p className="informationStyleTopP">Gender:</p>
                                <p>{this.props.character.gender}</p>
                            </div>
                            <div className="informationStyle">
                                <p className="informationStyleTopP">Origin:</p>
                                <p>{this.props.character.origin.name}</p>
                            </div>
                            <button type="button" class="btn btn-dark" onClick={e => this.desactivarModal()}>Close</button>
                        </div>
                    </div>
                </div>
            ) : null}

                <div class="center" onClick={e => this.activarModal()}>
                    <div class="property-card">
                        <img src={this.props.character.image}></img>
                        <div class="property-image">
                            <div class="property-image-title">
                            </div>
                        </div>
                        <div class="property-description">
                            <h5>{this.props.character.name}</h5>
                        </div>
                    </div>
                </div>

        </Fragment>

        )
    }
}

export default CharacterCard;