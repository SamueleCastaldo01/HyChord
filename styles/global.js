import { StyleSheet } from "react-native";
import { useFonts, Newsreader_400Regular, Newsreader_600SemiBold } from "@expo-google-fonts/newsreader";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "./ScreenDimensions";

const backGrigio = "#EEEEEE"
const backElenco = "#EEEEEE"
const back = "#EFEFEF"
const primary = "#04457E"
const colorText = "black"
const backCantico = "#EFEFEF"
const colorHeader = "#EFEFEF"


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: back,
        padding: 0,
        overflow: "hidden"
    },
    containerHome: {
        flex: 1,
        backgroundColor: back,
        padding: 0,
        overflow: "hidden"
    },
    containerRicerca: {
      flex: 1,
      backgroundColor: primary,
      padding: 0,
      overflow: "hidden"
  },
    containerStackCantico: {
        flex: 1,
        backgroundColor: backCantico,
        padding: 0,
        overflow: "hidden"
    },
    contCanticoScroll: {
      zIndex: -1,
        flex:1,
        backgroundColor: backCantico,
        },
    containerCantico: {
        flex:1,
        flexDirection:  "column",
        paddingLeft: 15,
        paddingRight: 15,
        },
    righeCantico: {
        position: "relative",
        flexDirection:  "row",
        margin: 0,
        marginBottom: -5,
        padding: 0,
        },
    textCantico: {
        position: "relative",
        marginTop: screenWidth < 500 ? 20 : 27,
        fontSize: RFValue(16),
        fontFamily: "Newsreader_400Regular",
        color: colorText
    },
    textCanticoNo: {
        position: "relative",
        marginTop: 5,
        fontSize: RFValue(16),
        fontFamily: "Newsreader_400Regular",
        color: colorText
    },
    textCanticoColo: {
        color: primary,
        fontWeight: "bold",
    },
    AccordoCantico: {
        position: "absolute",
        top: screenWidth < 500 ? 8 : 8,
        left: -3,
        fontSize: RFValue(10),
        fontFamily: "Newsreader_600SemiBold",
        color: primary,
        fontWeight: "bold",
    },
    SpazioCantico: {
        marginTop: screenWidth <500 ? 30 : 35,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
      header: {
        height: 80,
        position: "float",
        borderBottomWidth: 0,
        borderColor: "#d8d8d8",
        paddingTop: 38,
        backgroundColor: colorHeader
    },  
    titleHeader: {
        textAlign: "center",
        color: primary,
        fontSize: 20,
        fontFamily: "Newsreader_600SemiBold",
    },
    headerCantico: {
        height: 100,
        position: "float",
        borderBottomWidth: 0,
        borderColor: "#d8d8d8",
        flexDirection:  "row",
        paddingTop: 38,
        backgroundColor: colorHeader,
        paddingLeft: 15,
        paddingRight: 15,
    },  
    titleCantico: {
        paddingLeft: 15,
        textAlign: "left",
        color: primary,
        fontSize: RFValue(20),
        fontFamily: "Newsreader_600SemiBold",
    },
    titleHeaderCantico: {
        textAlign: "left",
        color: "#fff",
        fontSize: RFValue(20),
        fontFamily: "Newsreader_600SemiBold",
    },
    buttonHeader: {
        textAlign: "center",
        color: "#fff",
        fontSize: RFValue(20),
        fontWeight: "bold",
    },
    input: {
        width: "80%",
        marginRight: 5,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        paddingVertical: 4,
        paddingLeft: 7,
      },
      dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 4,
        padding: 10,
      },
      dropdownMenu: {
        position: "absolute",
        alignItems: 'left', 
        width: 95,
        zIndex: 1,
        right: -24,
        borderWidth: 0,
        borderRadius: 10,
        top: 55,
        paddingTop: 15,
        paddingLeft:10,
        paddingBottom: 10,
        backgroundColor: "#2F2F2F",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
      textMenu: {
        color: "white",
        fontSize: 16,
        fontFamily: "Newsreader_400Regular"
      },
      imageBass: {
        width: 24, // Larghezza dell'immagine PNG
        height: 24, // Altezza dell'immagine PNG
        tintColor: "white"
      },
      imageSearch: {
        width: 24, // Larghezza dell'immagine PNG
        height: 24, // Altezza dell'immagine PNG
        tintColor: "white"
      },
      containerElenco: {
        flexDirection: 'row', // Disposizione a riga
        alignItems: 'center', // Allineamento verticale al centro
        paddingHorizontal: 10, // Spazio interno orizzontale
        borderBottomWidth: 0.2, // Spessore del bordo
        borderColor: '#7F8082', // Colore del bordo
        backgroundColor: "transparent",
        padding: 20,
        paddingLeft: 10,
        paddingRight:30,
      },
      leftColumnElenco: {
        flex: 1, 
        alignItems: 'center', // Allineamento orizzontale a sinistra
      },
      centerColumnElenco: {
        flex: 4, 
        alignItems: 'flex-start', // Allineamento orizzontale al centro
      },
      rightColumnElenco: {
        flex: 1, 
        alignItems: 'flex-end', // Allineamento orizzontale a destra
      },    
      numberElenco: {
        color: primary,
        fontSize: 18,
        fontFamily: "Newsreader_600SemiBold_Italic",
      },
      titleElenco: {
        color: colorText,
        fontSize: 18,
        textAlign: 'left', // Allineamento del testo a sinistra
        fontFamily: "Newsreader_400Regular",
      },
  });