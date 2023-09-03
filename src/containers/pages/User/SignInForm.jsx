import SignUser from "components/user/SignUser";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

function SignInForm({
}){

    return(
        <FullWidthLayout>
            <SignUser/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(SignInForm)