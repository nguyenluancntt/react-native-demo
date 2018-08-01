import React, { Component } from 'react';
import {View, Text} from 'react-native';

// const AlbumList = () =>{

// };
class AlbumList extends Component{
    componentWillMount() {
        console.log('componentWillMount in Albums');
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => res.json())
        .then((resData) => console.log(resData));
    }

    render (){
        return (
            <View>
                <Text>album list !!!!</Text>
            </View>
        );
    }
}
export default AlbumList;