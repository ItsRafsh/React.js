// halaman materi pembelajaran part 3

import { Link, useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();
    // const handleNavigateToTerms = () => {
    //     navigate({
    //         pathname:'/terms',
    //     });
    // };
    const handleToProduct = () => {
        navigate({
            pathname:'/product',
        });
    };


    return(
        <div>
            <h1>Ini Home Page</h1>
            <p>setujui syarat dibawah ini</p>
            {/* <a href="/terms"></a> */}
            <Link to='/product'>Menuju halaman product</Link>   {/* hanya ganti di browser, gak request ke server lagi */}

            <br />
            <button onClick={handleToProduct}>product page</button>
            {/* bisa juga pake button, tapi pake function ubah URL nya hehe */}
        </div>
    )
}

export default HomePage;