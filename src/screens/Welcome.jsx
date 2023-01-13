import { View, Text, StyleSheet, Image, Button, TouchableWithoutFeedback,TouchableOpacity } from "react-native"
import { BlueColor } from "../constants"
// import { TouchableWithoutFeedback } from "react-native/Libraries/Components/Touchable/TouchableWithoutFeedback"
import welcomeImage from '../media/11.png'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <View style={{ marginTop: 51, alignSelf: 'center' }} >

                <Text style={styles.welcomeText}  >Find your Gadget</Text>
            </View>
            <View style={styles.image} >

                <Image style={{ width: '100%', height: '100%' }} source={welcomeImage} />
            </View>
            {/* <View style={{backgroundColor:'rgba(89, 86, 233,0.5)',width:'100%',height:20}} >

            </View> */}
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '20%', backgroundColor: BlueColor }} >
                <TouchableWithoutFeedback onPress={() =>navigation.navigate('login')} >
                    <View style={styles.button} >

                        <Text style={{ color: BlueColor, fontSize: 20, fontWeight: 700 }} >Get started</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5956E9',
        alignItems: 'center'
    },
    welcomeText: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: 55,
        color: '#ffffff',
        // textAlign:"center",
        // marginTop:51,

    },
    image: {
        // width:'80%',
        height: '45%',
        width: '90%',
        // marginBottom:-20
    },
    button: {
        width: '60%',
        height: '40%',
        borderRadius: 7,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    }


})