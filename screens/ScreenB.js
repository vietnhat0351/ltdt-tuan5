import { View, Text,StyleSheet, Pressable, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function ScreenB({navigation}) {

    const route = useRoute()

    const [img, setImg] = useState(route.params?.img)

    const onPressHandler = () => {
        navigation.navigate({
            name: 'ScreenA',
            params: { img: img},
          });
    }

    return(
        <View style={styles.container}>
            <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={{flex: 3}}>
                    <Image source={img} style={{width: 112, height: 132}}/>
                </View >

                <View style={{flex: 7}}>
                    <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{flex: 8, backgroundColor: '#C4C4C4', flexDirection: 'column', alignItems: 'center'}}>
                <Text>
                    Chọn một màu bên dưới:
                </Text>
                <Pressable style={{backgroundColor: '#C5F1FB', width: 80, height: 80, marginTop: 10}}
                    onPress={() =>{
                        setImg(require('../assets/vs_silver.png'))
                    }}
                >

                </Pressable>
                <Pressable style={{backgroundColor: '#F30D0D', width: 80, height: 80, marginTop: 10}}
                    onPress={() =>{
                        setImg(require('../assets/vs_red.png'))
                    }}
                >

                </Pressable>
                <Pressable style={{backgroundColor: '#000000', width: 80, height: 80, marginTop: 10}}
                    onPress={() =>{
                        setImg(require('../assets/vs_black.png'))
                    }}
                >

                </Pressable>
                <Pressable style={{backgroundColor: '#234896', width: 80, height: 80, marginTop: 10}}
                    onPress={() =>{
                        setImg(require('../assets/vs_blue.png'))
                    }}
                >

                </Pressable>

                <Pressable style={{backgroundColor: '#1952E2', marginTop: 10, width: '100%', alignItems: 'center', borderRadius: 10}}
                    onPress={onPressHandler}
                >
                    <Text style={{fontSize: 30, color: '#ffffff'}}>XONG</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
        padding: 10,
    },
  });
