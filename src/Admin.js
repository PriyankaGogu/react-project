import Datatable from "./Datatable";
import { users } from "./data";

export default function Admin(){
    return (
        <>
        <Datatable data={users}/>
        </>
    )
}