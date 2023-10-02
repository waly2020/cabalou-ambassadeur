"use client";
import "../../styles/home/sectionCalen.scss"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/fr';

export default function SectionCalen() {
    return (
        <div className="sectionCalen">
            <div className="sc-titre">
            <h2>Formation et evenement</h2>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale={esLocale}
                />
        </div>
    );
}