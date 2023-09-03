import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import HomePage from "components/Home/HomePage";

function Home({
}){

    return(
        <FullWidthLayout>
            <HomePage/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Home)