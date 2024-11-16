import ComicsList from "../comicsList/ComicsList";
import '../../assets/style/style.scss'
import ComicsSlider from "../comicsSlider/ComicsSlider";
import {useEffect} from "react";

function Comics () {

    useEffect(() => {
        document.title = 'Comics'
    }, []);
    return (
        <div>
            <ComicsSlider/>
            <ComicsList/>
        </div>
    )
}

export default Comics;