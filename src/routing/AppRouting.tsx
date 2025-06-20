import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AddThoughtPage, SearchPage, ImagePage } from '../pages';
import { Provider } from "../context/Context";
import Navigationbar from '../components/Navigation/Navigationbar';


const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Provider>
                    <Navigationbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='add' element={<AddThoughtPage />} />
                        <Route path='search' element={<SearchPage />} />
                        <Route path='upload' element={<ImagePage />} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </>
    )
}

export default AppRouting;