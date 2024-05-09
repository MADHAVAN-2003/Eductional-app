import { StyleSheet } from "react-native"

const CourseStyleSheet = StyleSheet.create(
    {
        coursePage : {
            flex:1
        },
        courseHeader : {
            fontSize : 30,
            fontWeight : "700"
        },
        CardContent: {
            flexDirection: 'row',
            justifyContent:"space-between",
            // alignItems : "center",
            marginRight: 20,
            marginLeft: 20,
            
          },
        card: {
            height: 50,
            marginTop: 20,
            
            // flexDirection: 'row',
            // alignItems: 'center',
            display:"flex",
            justifyContent : "center"
        },
        sno : {
            color : "grey",
            fontSize : 25,
            fontWeight : "800"
            // alignItems : "center",
            // display:"flex",
            // justifyContent : "flex-end"
        },
        title : {
            fontWeight : "600",
            fontSize : 20,
            // alignItems : "center",
            // justifyContent : "center"
        },
        playButton :{
            height : 30,
            width : 30,
            display : "flex",
            justifyContent : "flex-end",
            alignItems : "center"
        }
         
    }
) 

export default CourseStyleSheet