import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import Contact from "components/Others/Contact";

function Home({
}){

    return(
        <FullWidthLayout>
            <Contact/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Home)