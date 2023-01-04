import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Item from './src/Item';

const data = [
    {
        id: '590c678286f77426c9660122',
        name: 'IFAK individual first aid kit',
        gridImageLink:
            'https://assets.tarkov.dev/590c678286f77426c9660122-grid-image.jpg',
    },
    {
        id: '60098ad7c2240c0fe85c570a',
        name: 'AFAK tactical individual first aid kit',
        gridImageLink:
            'https://assets.tarkov.dev/60098ad7c2240c0fe85c570a-grid-image.jpg',
    },
    {
        id: '544fb45d4bdc2dee738b4568',
        name: 'Salewa first aid kit',
        gridImageLink:
            'https://assets.tarkov.dev/544fb45d4bdc2dee738b4568-grid-image.jpg',
    },
    {
        id: '558022b54bdc2dac148b458d',
        name: 'EOTech EXPS3 holographic sight (Tan)',
        gridImageLink:
            'https://assets.tarkov.dev/558022b54bdc2dac148b458d-grid-image.jpg',
    },
    {
        id: '570fd6c2d2720bc6458b457f',
        name: 'EOTech 553 holographic sight',
        gridImageLink:
            'https://assets.tarkov.dev/570fd6c2d2720bc6458b457f-grid-image.jpg',
    },
    {
        id: '57347ca924597744596b4e71',
        name: 'Graphics card',
        gridImageLink:
            'https://assets.tarkov.dev/57347ca924597744596b4e71-grid-image.jpg',
    },
    {
        id: '58491f3324597764bc48fa02',
        name: 'EOTech XPS3-0 holographic sight',
        gridImageLink:
            'https://assets.tarkov.dev/58491f3324597764bc48fa02-grid-image.jpg',
    },
    {
        id: '584924ec24597768f12ae244',
        name: 'EOTech XPS3-2 holographic sight',
        gridImageLink:
            'https://assets.tarkov.dev/584924ec24597768f12ae244-grid-image.jpg',
    },
    {
        id: '59f9d81586f7744c7506ee62',
        name: 'Vortex Razor AMG UH-1 holographic sight',
        gridImageLink:
            'https://assets.tarkov.dev/59f9d81586f7744c7506ee62-grid-image.jpg',
    },
    {
        id: '5c0505e00db834001b735073',
        name: 'Valday PK-120 (1P87) holographic sight',
        gridImageLink:
            'https://assets.tarkov.dev/5c0505e00db834001b735073-grid-image.jpg',
    },
    {
        id: '62a0a124de7ac81993580542',
        name: 'Topographic survey maps',
        gridImageLink:
            'https://assets.tarkov.dev/62a0a124de7ac81993580542-grid-image.jpg',
    },
];

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        url={item.gridImageLink}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default App;
