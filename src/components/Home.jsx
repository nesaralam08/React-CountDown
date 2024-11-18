import { useEffect } from "react"
import { useState } from "react"

export default function Home() {
    const [time,setTime] = useState(7*24*60*60*1000)
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000);
        },1000)
    },[time])
    function getSec(time){
        let totalSec = parseInt(Math.floor(time/1000))
        return parseInt(totalSec % 60);
    }
    function getMin(time){
        let totalSec = parseInt(Math.floor(time/1000))
        return parseInt((parseInt(Math.floor(totalSec/60)))%60)
    }
    function getHour(time){
        let totalSec = parseInt(Math.floor(time/1000))
        let totalHour = parseInt(Math.floor(totalSec/60));
        return parseInt((parseInt(Math.floor(totalHour/60)))%24)
    }
    function getDay(time){
        let totalSec = parseInt(Math.floor(time/1000))
        let totalMin = parseInt(Math.floor(totalSec/60));
        let totalHour = parseInt(Math.floor(totalMin/60))

        return parseInt(Math.floor(totalHour/24))
    }
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center flex-col">
                    <h1 className="text-2xl font-semibold text-green-600">Coming Soon...</h1>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": `${getDay(time)}`  }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": `${getHour(time)}` }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": `${getMin(time)}` }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": `${getSec(time)}` }}></span>
                        </span>
                        sec
                    </div>
                    {/* <h1>{time}</h1> */}
                </div>
            </div>
        </div >
        </>
    )
}