import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../Axios-Client";

export default function Sidebar({ click , showSidebar , showSideHeader , showUserInfo
     , showLogoutBtn , showSideUser , showSideMenuList , showTitle , showSideFooter , showSlideSidebar}) {
    const [data, setData] = useState('');
    const [city, setLocation] = useState("");
    const Weatherkey = "36b90ff89a52d49f85627b18ea50ed81";

    // ` sided/back/grave quote used when calling in react const url
    // ${} act as a catchable value of a constant variable

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weatherkey}`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
        }
    };

    const { user, setUser } = useStateContext();

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, []);

    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            });
    };

    return (
        <aside className={showSidebar?"sidebar2":"sidebar"} id={showSlideSidebar?"slidesidebar2":"slidesidebar"}>
            <div className={showSideHeader?"side_header2":"side_header"}>
                <i className="fa-solid fa-book"></i>
                <h1>ES-Dictionary</h1>
            </div>

            <div className={showSideUser?"side_user2":"side_user"}>
                <div className={showUserInfo?"user_info2":"user_info"}>
                    <i className="fa-solid fa-user"></i>
                    <h2>Welcome <strong>{user.name}</strong></h2>
                </div>
                <div className={showLogoutBtn?"logout_btn2":"logout_btn"}>
                    <a href="#0" onClick={click}>Logout</a>
                </div>
            </div>

            <ul className={showSideMenuList?"side_menu_list2":"side_menu_list"}>
                <li>
                    <Link to="/users" className="sidelist">
                        <span className="icon"><i className="fa-solid fa-list"></i></span>
                        <span className={showTitle?"title2":"title"}>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <a href=""className="sidelist">
                        <span className="icon"><i className="fa-solid fa-book"></i></span>
                        <span className={showTitle?"title2":"title"}>Dictionary</span>
                    </a>
                </li>
                <li>
                    <Link to="/dashboard" className="sidelist">
                        <span className="icon"><i className="fa-solid fa-user"></i></span>
                        <span className={showTitle?"title2":"title"}>Account</span>
                    </Link>
                </li>
                <li>
                    <a href="" className="sidelist">
                        <span className="icon"><i className="fa-solid fa-ticket"></i></span>
                        <span className={showTitle?"title2":"title"}>Support</span>
                    </a>
                </li>
            </ul>
            <div className="weather-bottom">
                <input
                    type="text"
                    name="location"
                    id="city"
                    value={city}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Enter Location"
                    onKeyPress={searchLocation}
                />
                <div className="weather-container">
                    <div className="weather-head">
                        <div className="weather-city">
                            <p>{data.name}</p>
                        </div>
                        <div>
                            <div className="weather-temp">
                                {data.main ? (
                                    <h1 className="temp">
                                        {data.main.temp.toFixed()}°C
                                    </h1>
                                ) : null}
                            </div>
                            <div className="weather-description">
                                {data.weather ? (
                                    <p>{data.weather[0].main}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="weather-footer">
                        <div className="feels box">
                            {data.main ? (
                                <p className="bold">
                                    {data.main.feels_like.toFixed()}°C
                                </p>
                            ) : null}
                            <p className="title">{data.main && `Feels like`}</p>
                        </div>
                        <div className="humidity box">
                            {data.main ? (
                                <p className="bold">{data.main.humidity}%</p>
                            ) : null}
                            <p className="title">{data.main && `Humidity`}</p>
                        </div>
                        <div className="windspeed box">
                            {data.wind ? (
                                <p className="bold">
                                    {data.wind.speed.toFixed()} MPH
                                </p>
                            ) : null}
                            <p className="title">{data.main && `Windspeed`}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={showSideFooter?"side_footer2":"side_footer"}>
                <h4>ES-Dictionary V.1</h4>
            </div>
        </aside>
    )
}