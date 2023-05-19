import { StyleSheet, Text, View, Image, ToutchableOpacity } from 'react-native';
import {styles} from "./style";
import { StatusBar } from 'expo-status-bar';
import Moura from "./img/logoMoura.png";

export function Home(){
    return(
    <View style={styles.container}>
        <View style={styles.container2}>
            <Image
            style={styles.mouraLogo}
            source={Moura}
            />
            <View style={styles.Cabecalho}>
                <Text style={styles.Titulo}>Turmas</Text>
                <Text style={styles.Texto}>Jogue com a sua turma</Text>
            </View>
            <View>
                
            </View>
            
        </View>
    <View>
        
        </View>
    </View>
    
    );
}