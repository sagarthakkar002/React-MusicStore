import LabeledInput from "../molecules/LabeledInput"
import Button from '../atoms/Button'
import FormDialog from './FormDialog'

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {

        super(props)
        this.displayData = [];

        this.state = {
            all_songs: this.displayData,
            songInfo: {
                songname: "",
                artist: '',
                location: '',
                album: "",
                duration: "",
                tag: "",
            },
            errors: {
                songname: ''
            }
        }
        this.initstate = this.state;

    }
    handleChange = (e) => {
        var songprop = { ...this.state.songInfo }
        var inputname = e.target.name
        var valueofinput = e.target.value
        songprop[inputname] = valueofinput
        this.setState({
            songInfo: songprop,
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {


            this.displayData.push(this.state.songInfo)
            this.setState({
                all_songs: this.displayData
            })
            this.setState(this.initstate)
           

        } else {
            //alert("Enter Values")
        }
        console.log(this.state.all_songs[0])
    }
    validateForm = () => {
        let fields = this.state.songInfo;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["songname"]) {
            formIsValid = false;
            errors["songname"] = "songname Cannot be empty";
        }
        //artist
        if (!fields["artist"]) {
            formIsValid = false;
            errors["artist"] = "artist Cannot be empty";
        }
        if (!fields["location"]) {
            formIsValid = false;
            errors["location"] = "location Cannot be empty";
        }
        if (!fields["album"]) {
            formIsValid = false;
            errors["album"] = "album Cannot be empty";
        }
        if (!fields["tag"]) {
            formIsValid = false;
            errors["tag"] = "tag Cannot be empty";
        }



        this.setState({ errors: errors });
        return formIsValid;
    }
    handleCancel = () => {
        // console.log(this.initstate)
        this.setState(this.initstate)
    }

    render() {
        return (
            <React.Fragment>
                <LabeledInput
                    forName={'name'} title={'Song Name:'}
                    name={'songname'} idName={'name'} inputType={'text'} minNo={0}
                    value={this.state.songInfo.songname} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter name..'} />
                <span style={{ color: "red" }}>{this.state.errors["songname"]}</span>
                <LabeledInput
                    forName={'artist'} title={'Artist:'}
                    name={'artist'} idName={'artist'} inputType={'text'} minNo={0}
                    value={this.state.songInfo.artist} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter artist..'} />
                <span style={{ color: "red" }}>{this.state.errors["artist"]}</span>
                <LabeledInput
                    forName={'loaction'} title={'Location:'}
                    name={'location'} idName={'location'} inputType={'text'} minNo={0}
                    value={this.state.songInfo.location} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter loacation..'} />
                <span style={{ color: "red" }}>{this.state.errors["location"]}</span>
                <LabeledInput
                    forName={'album'} title={'Album:'}
                    name={'album'} idName={'album'} inputType={'text'} minNo={0}
                    value={this.state.songInfo.album} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter album..'} />
                <span style={{ color: "red" }}>{this.state.errors["album"]}</span>
                <LabeledInput
                    forName={'duration'} title={'Duration:'}
                    name={'duration'} idName={'duration'} inputType={'number'} minNo={0}
                    value={this.state.songInfo.duration} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter duration..'} />
                <LabeledInput
                    forName={'tag'} title={'Tag:'}
                    name={'tag'} idName={'tag'} inputType={'text'} minNo={0}
                    value={this.state.songInfo.tag} validatehandle={this.state.validatehandle}
                    handleChange={this.handleChange} placeVal={'enter tag..'} />
                <span style={{ color: "red" }}>{this.state.errors["tag"]}</span>
                <div className="button-div">
                    <Button changeclick={this.handleSubmit} id={"submit"} title={'SUBMIT'} />
                    <FormDialog title={'Cancel'} />

                </div>
                <div>
                {/* {this.state.all_songs[0]} */}
                
                {JSON.stringify(this.state.all_songs)}
                {/* {this.state.all_songs.map((value, index) => 
                <div key={index}> {value.songname} 
                </div>
                )} */}
                </div>

            </React.Fragment>

        )
    }
}

export default Form
