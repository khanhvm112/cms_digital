import React from "react";
// import axios from "../../../../axios";
import Cookies from "js-cookie";
// import { compose } from 'redux';
// import { connect } from 'react-redux';

const wkrd = Cookies.get('__wkrd');
class Authenticator extends React.Component {
  componentDidMount = async () => {
    if (!wkrd) {
      // window.location.replace(process.env.REACT_APP_LOGIN_URL)
      console.log(1111)
    } else {
      try {
        console.log(wkrd)
        // let dataUser = await axios.post({});
        let dataUser = 1;
        if(dataUser && dataUser === 1 ){
          
        }
        
      } catch (error) {
        if (error.response) {
          if (error.response.dataUser) {
            this.setState = {
              errorMess: error.response.dataUser,
            };
          }
        }
        console.log(error);
      }
    }
  }
  render() {
    return (
      <>
        {/* {!wkrd ? window.location.replace(process.env.REACT_APP_LOGIN_URL) : <>LOGIN</>} */}
        {/* {wkrd ? window.location.replace(process.env.REACT_APP_LOGIN_URL) : <>LOGIN</>} */}
      </>
    );
  }
}
// const mapStateToProps = state => {
//   return {

//   }
// }

// const mapDisPatchToProps = dispatch =>{
//   return {

//   }
// }

// export default connect(mapStateToProps,mapDisPatchToProps )(Authenticator);
export default Authenticator;
