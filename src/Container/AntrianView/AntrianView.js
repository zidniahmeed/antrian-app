import AntrianActive from "../AntrianActive/AntrianActive";
import AntrianNonActive from "../AntrianNonActive/AntrianNonActive";

const AntrianView = () => {
    return ( <>
        <div className="container mt-5">
            <div className="row">
                <p>Antrian jalan</p>
                <AntrianActive />
            </div>
            <div className="container mt-5 mb-2">
                <p>Antrian selesai</p>
                <div className="row">
                    <AntrianNonActive />
                </div>
            </div>
        </div>


    </> );
}
 
export default AntrianView;