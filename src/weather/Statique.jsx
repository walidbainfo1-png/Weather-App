import {  useEffect, useRef, useState } from "react"
import weather from "../assets/weather.jpg"
import Body from "./Body";
import { ElementContext } from "./Context";
export default function Statique() {
    

    const ApiKey = "8021c6f77abaed4166592f1845d6e125";
    const Ville = useRef()
    const [ApiVille, setApiVille] = useState("rabat")
    const [data, setData] = useState([])
    // console.log("data", data);
    useEffect(() => {
        const getAsync = async () => {
            const getData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ApiVille}&limit=1&appid=${ApiKey}`)
            const recupereJson = await getData.json()
            if (recupereJson.length !== 0) {

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${recupereJson[0].lat}&lon=${recupereJson[0].lon}&lang=fr&appid=${ApiKey}`)
                    .then(Response => Response.json())
                    .then(Response => setData(Response)
                    )
            }
        }



        getAsync()
    }, [ApiVille])

    return (
        <>
            <div className="h-screen w-screen relative">
                <img src={weather} alt="b-g" className="h-full w-full opacity-75 " />

                <div className="absolute inset-0 w-screen max-h-3/12 flex justify-center items-center gap-2 z-20">
                    <input type="text" placeholder="cherche votre ville"
                        className=" w-60 outline-none bg-gray-400 h-10 px-2
                border-b-3 border-slate-200 md:min-w-150 my-12
                "
                        ref={Ville}
                    />
                    <button
                        onClick={() => setApiVille(Ville.current.value)}
                        className=" bg-gray-400 h-10 w-20 cursor-pointer active:bg-gray-300 text-l text-gray-300 border-b-3 border-slate-200">cherche</button>


                </div>
                <div className="absolute inset-0 -translate-y-10 flex justify-center z-10">
                    <ElementContext.Provider value={{data}}>
                        <Body />
                    </ElementContext.Provider>

                </div>



            </div>
        </>)
}