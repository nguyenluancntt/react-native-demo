import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { albums: []};
    componentWillMount() {
        console.log('componentWillMount in Albums');
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => res.json())
        .then((resData) => this.setState({albums: resData}));
    }
    renderAlbum(){
        return this.state.albums.map(item => 
        <AlbumDetail key={item.title} album={item} />
    );
    }
    render (){
        console.log(this.state.albums)
        return (
            <ScrollView>
               {this.renderAlbum()}
            </ScrollView>
        );
    }
}
export default AlbumList;