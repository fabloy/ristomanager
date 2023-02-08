export const getCurrentDayCalendar = ()=>{
 return document.getElementsByClassName("react-calendar__tile--now")[0].children[0].getAttribute("aria-label")
}

export const setCurrentDay = (dayToShow,setDayToShow)=>{
    dayToShow==="" && setDayToShow(getCurrentDayCalendar(dayToShow))
}