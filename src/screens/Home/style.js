import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
      },
      container2:{
        flex: 1,
        alignItems: 'center',
      },
      Cabecalho:{
        flexDirection: "column",
      },
      Titulo: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
      },
      Texto: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 4,
      },
      mouraLogo: {
        width: 80,
        height: 60,
        marginTop:40,
        alignItems: 'center',
      },
      Button:{
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32CD32',
        borderRadius: 4,
        marginLeft: 10,
      },
})