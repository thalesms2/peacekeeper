import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface ItemProps {
    name: string;
    url: string;
}

const Item: React.FC<ItemProps> = (props) => {
    const [width, setWidth] = React.useState<number>();
    const [height, setHeight] = React.useState<number>();

    const styles = StyleSheet.create({
        item: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 10,
            padding: 10,
        },
        image: {
            width: width,
            height: height,
            alignSelf: 'center',
        },
    });
    Image.getSize(props.url, (x, y) => {
        setWidth(x);
        setHeight(y);
    });
    return (
        <View style={styles.item}>
            <Image
                source={{
                    uri: props.url,
                }}
                style={{
                    width: width,
                    height: height,
                }}
            />
            <Text>{props.name}</Text>
        </View>
    );
};

export default Item;
