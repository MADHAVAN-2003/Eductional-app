import React from 'react';
import { View, Text, Image, TextInput, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import profileImg from "../Home/images/Male User.png";
import BannerImg from "../Home/images/Banner.png"
import HomeStyle from './HomeStyle';
import videoCourseData from '../../Shared/videoCourse.Data';
import basicProperCourse from '../../Shared/basicProperCourse';
import advanceCourses from '../../Shared/advanceCourses';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const Home = () => {
	const navigation = useNavigation()
	return (
		<>
		<StatusBar backgroundColor={"grey"} />
		<ScrollView>
		<View style={{ padding: 20,backgroundColor:"white" , flex : 1 }}>
			<View style={HomeStyle.header}>
				<View>
					<Text style={{ marginBottom: 2, marginTop: 2, fontSize: 20 }}> Hello</Text>
					<Text style={{ fontSize: 24, fontWeight: "700" }}>Maddie!</Text>
				</View>

				<View>
					<Image source={profileImg} />
				</View>

			</View>
			
			<View style={{marginTop:20,elevation:5,padding:5}}>
			<View style={HomeStyle.searchBar}> 
				<Feather name="search" size={24} color="grey" />
				<TextInput style={{fontSize : 18 , color : "grey"}} placeholder="Search.."/>
			</View>
			</View>

			<View style={HomeStyle.bannerImg}>
				<Image source={BannerImg}/>
			</View>
			{/* VideoCourses Section */}
			<View>
				<Text style={{fontSize:18, fontWeight : "700" , marginTop : 20}}>Video Courses</Text>
				<View style={{marginTop : 10,height:100}}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							{videoCourseData.map((courseImg,index)=>{
								return (
									<TouchableOpacity key={index}onPress={()=> navigation.navigate('Courses') }>
										<View style={{paddingRight:10 }}>
											<Image  source={courseImg.img}/>
										</View>
									</TouchableOpacity>
								)
							})}					
					</ScrollView>
				</View>
			</View>
			{/* PopularCourses Section */}
			<View>
				<Text style={{fontSize:18, fontWeight : "700" , marginTop : 20}}>Popular Courses</Text>
				<View style={{marginTop : 10}}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} >
					{basicProperCourse.map((courses,index)=>{
						return (
							<TouchableOpacity key={index} onPress={()=> navigation.navigate('Courses') }>
								<Card style={{height:200 , width:200 , marginRight:20 }}>
									<View  style={{paddingRight:10 }}>
										<Image source={courses.img} style={{width:"100%",height:"70%"}} />
										<Card.Content >
											<Text style={{fontSize:20, fontWeight:"500",marginTop:10}}>{courses.courseTitle}</Text>
											<Text>{courses.lessons}</Text>
										</Card.Content>
									</View>
								</Card>							
							</TouchableOpacity>						
						)
					})}
					</ScrollView>
				</View>
			</View>				
			{/* AdvanceCourses Section */}
			<View>
				<Text style={{fontSize:18, fontWeight : "700" , marginTop : 20}}>Advance Courses</Text>
				<View style={{marginTop : 10}}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{advanceCourses.map((courses,index)=>{
						return (
							<TouchableOpacity>
								<Card style={{height:200 , width:200 , marginRight:20 }} elevation={5}>
									<View key={index} style={{paddingRight:10 }}>
										<Image source={courses.img} style={{height:"70%",width:"100%"}} />
										<Card.Content >
											<Text style={{fontSize:20, fontWeight:"500",marginTop:10 , textAlign : "left"}}>{courses.courseTitle}</Text>
											<Text>{courses.lessons}</Text>
										</Card.Content>
									</View>
								</Card>							
							</TouchableOpacity>
						)
					})}
					</ScrollView>
				</View>
			</View>
		</View>
		</ScrollView>
		</>
	);
};


export default Home;
