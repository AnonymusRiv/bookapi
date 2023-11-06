import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import About from "components/Others/About";

function Home({
}){

    return(
        <FullWidthLayout>
            <About/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Home)