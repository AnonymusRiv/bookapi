import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import { Connect, connect } from "react-redux"

const FullWidtheLayout = ({children}) => {
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

})(FullWidtheLayout)