import ShowUsers from "components/user/ShowUsers";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function Users(){
    return(
        <FullWidthLayout>
            <ShowUsers/>
        </FullWidthLayout>
    )
}

export default Users