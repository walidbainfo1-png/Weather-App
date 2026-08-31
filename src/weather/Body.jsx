import { useContext } from "react"
import { ElementContext } from "./Context"

export default function Body() {

    const date = new Date()
    const dateComplete = date.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    })
    const { data } = useContext(ElementContext)
    console.log("data", data);
    //    console.log("country " , data.sys.country);   

    const temperature = data.main?.temp - 273
    console.log(parseInt(temperature));

    if (!data.weather) {
        return "chargement ..."
    }
    return (
        <div className="bg-gray-800/25 w-82 h-95 my-40 md:min-w-172 ab">
            <div className=" flex-col flex justify-center my-4 text-gray-800  text-center">
                <h1 className="font-extrabold">{data.name}</h1>
                <p className="opacity-80">{dateComplete}</p>
                <div className="flex justify-center h-50 -translate-y-7">
                    <img

                        src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
                        alt={data.weather[0]?.description}
                    />

                </div>
                <div className="-translate-y-16  text-blue-100">
                    <p className="font-extrabold text-4xl">{parseInt(temperature)} *C</p>
                    <p className="">{data.weather[0]?.main} , {data.weather[0]?.description}</p>

                </div>
                <div className=" flex justify-center ">
                    <div className="flex justify-around items-center bg-gray-600 h-16 w-60 -translate-y-10 rounded-2xl">
                        <div>
                            <p>humidity</p>
                            <p >{data.main.humidity}</p>
                        </div>
                        <div className="h-10 border-l-2 border-white"></div>
                        <div>
                            
                            <p>max</p>
                            
                            <p >{parseInt(data.main.temp_max - 273)}*C</p>
                        </div>
                        <div className="h-10 border-l-2 border-white"></div>
                        <div>
                            <p>min</p>
                            <p >{parseInt(data.main.temp_min - 273)}*C</p>
                        </div>
            
                    </div>
                </div>
            </div>

        </div>
    )
}