import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';


export default function ScreenA({navigation}) {

    const route = useRoute()

    const onPressHandler = () => {
        navigation.navigate('ScreenB', {img: img})
    }

    const [img, setImg] = useState(require('../assets/vs_blue.png'))

    useEffect(() => {
        if (route.params?.img) {
            console.log(`abc`);
            setImg(route.params?.img)
        }
      }, [route.params?.img]);
    
    return(
        <View style={styles.container}>
            <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={img} style={{width: 301, height: 361}}/>
            </View>
            <View style={{flex: 4, flexDirection: 'column', paddingTop: 10}}>
                <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Image source={require('../assets/star.png')}/>
                    <Image source={require('../assets/star.png')}/>
                    <Image source={require('../assets/star.png')}/>
                    <Image source={require('../assets/star.png')}/>
                    <Image source={require('../assets/star.png')}/>

                    <Text style={{left: 50}}>(Xem 828 đánh giá)</Text>
                </View>

                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>1.790.000 đ</Text>
                    <Text style={{left: 50, fontSize: 25}}>1.790.000 đ</Text>
                    <View style={{borderWidth: 1, borderColor: '#000000', width: 150, height: 0, zIndex: 1, top: 17, left: -90}}></View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Text style={{fontWeight: 'bold', color: 'red', fontSize: 20}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image source={require('../assets/hoi_cham.png')} style={{marginLeft: 10}}/>
                </View>

                <Pressable
                    style={{borderWidth: 2, borderColor: '#000000', borderRadius: 10, marginTop: 10, alignItems: 'center'}}
                    onPress={onPressHandler}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 20}}>
                            4 MÀU-CHỌN MÀU
                        </Text>
                    </View>
                </Pressable>

                <Pressable style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', marginTop: 50, borderRadius: 10}}>
                    <Text style={{fontSize: 25, color: '#ffffff'}}>
                        CHỌN MUA
                    </Text>
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