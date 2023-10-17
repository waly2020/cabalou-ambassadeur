"use client";
import "../../styles/home/sectionCalen.scss"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/fr';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth';

export default function SectionCalen() {
    return (
        <div className="sectionCalen" id="event">
            <div className="sc-titre">
            <h2>Formation et evenement</h2>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin,multiMonthPlugin]}
                initialView="multiMonthYear"
                locale={esLocale}
                headerToolbar={{
                    start : "prev,next",
                    center : "title",
                    end : "timeGridWeek,dayGridMonth,multiMonthYear"
                }}
                height={"500px"}
                events={[
                    {
                        title : "Formation des ambassadeurs",
                        start : "2023-10-08T12:00:00",
                        end : "2023-10-25T15:30:00",
                        url : "https://google.com",
                        // daysOfWeek : [1,2,6],
                        
                    },
                    {
                        title : "Remise des certicats",
                        start : "2023-10-25T09:00:00",
                        end : "2023-10-08T18:00:00",
                        url : "https://google.com"
                    }
                ]}
                />
        </div>
    );
}