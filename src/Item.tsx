import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableHighlight,
} from 'react-native';

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
            width: '100%',
            marginTop: 5,
            padding: 5,
            backgroundColor: '#808080',
        },
        itemHover: {
            backgroundColor: 'white',
        },
        image: {
            width: width,
            height: height,
            alignSelf: 'center',
            borderColor: '#d8d8d8',
            borderWidth: 0.1,
        },
        title: {
            marginLeft: 10,
            alignSelf: 'center',
        },
    });
    const handlePress = () => {
        console.log('press');
    };
    Image.getSize(props.url, (x, y) => {
        setWidth(x);
        setHeight(y);
    });
    const pressProps = {
        onPress: handlePress,
        style: styles.item,
    };
    return (
        <TouchableHighlight {...pressProps}>
            <Image
                source={{
                    uri: props.url,
                }}
                style={styles.image}
            />
            <Text style={styles.title}>{props.name}</Text>
        </TouchableHighlight>
    );
};

export default Item;
