import { StyleSheet } from "react-native";

const HomeStyle =  StyleSheet.create({
    header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "stretch",
	},
	searchBar : {
		
		borderWidth : 2,
		borderRadius : 5,
		// display : "flex",
		flexDirection :"row",
		gap : 10,
		alignItems : "center",
		padding : 10,
		// marginTop : 20,	
		// elevation: 10,
        // shadowColor: "#10aaae",
        // shadowRadius: 7,
        // shadowOpacity: .5,
        // shadowOffset : { width: 0, height: 10 }
	},
	bannerImg : {
		marginTop : 20,
		
	}
})

export default HomeStyle