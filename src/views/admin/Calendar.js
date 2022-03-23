import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";

const localizer = momentLocalizer(moment);

export default function EventsCalendar() {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Evento de hoy",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-[80px]">
            <Calendar
              selectable
              localizer={localizer}
              events={events}
              defaultDate={new Date()}
              defaultView="month"
              onSelectSlot={(sloptInfo) => console.log("sloptInfo", sloptInfo)}
              culture="es"
              style={{ height: 800 }}
              messages={{
                next: "Siguiente",
                previous: "Anterior",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
