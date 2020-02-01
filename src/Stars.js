import React from "react";
// import Icon from 'react-native-vector-icons/Ionicons';

export default class Stars extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
          nbClickedstar : 0
        }
    }
    
    displayStar = (props) => {
        let arr = [];

       if(props.starsRating){  //AFFICHAGE DES STAR POUR LA LISTE DES FILMS
        for (let i = 0; i < 5; i++) {
          if (i < props.starsRating)
            arr.push(
              <item key={i}>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    fill="#eed94e"
                    d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"
                  />
                </svg>
              </item>
            );
          else {
            arr.push(
              <item key={i}> 
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                </svg>
              </item>
            );
          }
        }
        } else { //AFFICHAGE DES ETOILES DANS LA BARRE DU FILTRE
            for (let i = 0; i < 5; i++) {
                arr.push(
                    <item key={i} onClick={()=>this.props.starFilter(i+1)}> 
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                      </svg>
                    </item>
                  ); 
            } 
        }
      return <div>{arr}</div>;
}  

    render(){       
        return(
            this.displayStar(this.props)  
        );
    }
}