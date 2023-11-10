import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import SeeLends from "components/Lend/SeeLends";

function Lends({
}){

    return(
        <FullWidthLayout>
            <SeeLends/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Lends)