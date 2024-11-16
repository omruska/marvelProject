import notFound from '../../assets/img/notFound.jpg';
function NotFound () {
    return (
        <div className='notfound_container'>
            <div className="text">
                <h1>404 PAGE NOT FOUND</h1>
                <h3>HYDRA has stolen this page from the S.H.I.E.L.D. database!</h3>
                <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
            </div>
            <img src={notFound} alt="notfound"/>
        </div>
    )
}

export default NotFound;