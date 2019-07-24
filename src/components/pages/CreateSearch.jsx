import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dataSong from '../../data/dataSong.json'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

class CreateSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            all_songs: [],
            songs_detail: dataSong,
            searchterm: '',
            searchedsong: []

        }
    }

    handleSearch = (e) => {
        this.setState({
            searchterm: e.target.value
        })

    }

    handleSubmit = (name, id) => {
        var joined = this.state.all_songs.concat(name);
        var uniquearr = [...new Set(joined)]
        this.setState({ all_songs: uniquearr })

    }
    handleRemove = (name) => {
        console.log("name " + name)
        const index = this.state.all_songs.indexOf(name);
        console.log(index)
        if (index !== -1) {
            this.state.all_songs.splice(index, 1);
        }

        var uniquearr = [...new Set(this.state.all_songs)]
        this.setState({ all_songs: uniquearr })
    }
    handleSearchSubmit = () => {
        var searchsong = this.state.searchterm;
        const songval = this.state.songs_detail.filter(song => song.name === searchsong)
        console.log(songval)
        this.setState({
            searchedsong: songval
        })

    }

    render() {
        var obj = dataSong

        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={4} md={4}>
                            {obj.map((data, index) =>
                                <div key={index} className="displaySongDiv">
                                    <span>SONG  : {data.name} </span>
                                    <span>ARTIST: {data.artist}</span>
                                    <span>LOC   : {data.location}</span>
                                    <span>ALBUM : {data.album} </span>
                                    <span>DURATION: {data.duration} </span>
                                    <span>TAG :{data.tag}</span>
                                    <button id="addSongButton" onClick={() => this.handleSubmit(data.name, data.id)} >ADD</button>
                                    <button id="addSongButton" onClick={() => this.handleRemove(data.name)} >REMOVE</button>
                                    <hr></hr>

                                </div>

                            )}

                        </Col>
                        <Col xs={4} md={4}>
                            <h2>Playlist</h2>
                            {this.state.all_songs.map((all_songs, index) =>
                                <div key={index}>
                                    {all_songs}

                                </div>
                            )}

                        </Col>
                        <Col xs={4} md={4}>
                            <Input
                                name={'tag'} idName={'tag'} inputType={'text'} minNo={0}
                                value={this.state.searchterm} validatehandle={this.state.validatehandle}
                                handleChange={this.handleSearch} placeVal={'Search..'} />
                            <Button changeclick={this.handleSearchSubmit} id={"search"} title={'Search'} />

                            {this.state.searchedsong.map((value, key) => <div key={key}>
                                <div className="search-div">
                                    <pre><span><strong>SONG:</strong>{value.name}</span>
                                    <span><strong>ARTIST:</strong>{value.artist}</span>
                                    <span><strong>ALBUM:</strong>{value.album}</span>
                                    <span><strong>DURATION:</strong>{value.duration}</span>
                                    <span><strong>TAG:</strong>{value.tag}</span></pre></div>

                            </div>)}
                        </Col>

                    </Row>
                </Container>


            </div>

        )
    }
}

export default CreateSearch
