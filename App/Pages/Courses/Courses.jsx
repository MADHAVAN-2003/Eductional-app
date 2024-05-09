import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, Card, Menu } from 'react-native-paper'
import CourseStyleSheet from './CourseStylesheet'
import CourseBannerImg from '../Courses/Images/CourseBanner.png'
import CourseContent from '../../Shared/CourseContent'

const Courses = ()=> {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
       <View style={CourseStyleSheet.coursePage}>
         <ScrollView>
             <View style = {{padding : 20,}}>
            {/* <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor ={
                    <Appbar.Action icon="dots-vertical"  onPress={openMenu}/>
                }>
                
                    <Menu.Item  onPress={()=> console.log("Item1 Pressed")} title="Item 1" />
                    <Menu.Item  title="Item 2" />
                    <Menu.Item  title="Item 3" />
            </Menu> */}
            <View>
                <Text style={CourseStyleSheet.courseHeader}>Python Basics</Text>
                <Text>By Maddie</Text>
            </View>

            <View>
                <Image source={CourseBannerImg} style={{marginTop: 20}}></Image>
            </View>

            <View>
                <Text style={{fontSize:25,fontWeight:"700",marginTop:10}}>About Course</Text>
                <Text style={{fontSize : 15, color:"grey",paddingTop:4}}>Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. </Text>
            </View>

            <View>
                <Text style={{fontSize:25,fontWeight:"700",marginTop:10}}>Course Content</Text>
            </View>

            <View>
                {CourseContent.map((details,index)=>{
                    return(
                        <View key={index}>
                            <TouchableOpacity>
                                <Card  style={CourseStyleSheet.card}>
                                    <View style={CourseStyleSheet.CardContent}>
                                        <Text style={CourseStyleSheet.sno}>{details.sno}</Text>
                                        <Text style={CourseStyleSheet.title}>{details.title}</Text>
                                        <Image style={CourseStyleSheet.playButton} source={details.playBtn}/>
                                    </View>                            
                                </Card>
                            </TouchableOpacity>
                        </View>
                    )                
                })}
            </View>
        </View>
        </ScrollView>
       </View>
       
      
    )
}

export default Courses