import RegisterUSer from "components/user/RegisterUser";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

function RegisterForm({
}){

    return(
        <FullWidthLayout>
            <RegisterUSer/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(RegisterForm)