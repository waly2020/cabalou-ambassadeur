"use client";
import "../../styles/home/sectionCalen.scss"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/fr';

export default function SectionCalen() {
    return (
        <div className="sectionCalen" id="event">
            <div className="sc-titre">
            <h2>Formation et evenement</h2>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialView="dayGridMonth"
                locale={esLocale}
                headerToolbar={{
                    start : "prev,next",
                    center : "title",
                    end : "timeGridDay,timeGridWeek,dayGridMonth"
                }}
                height={"500px"}
                />
        </div>
    );
}