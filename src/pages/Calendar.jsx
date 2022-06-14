import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'


const Calendar = () => {
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl'>
            <Header category="App" title="Calendar"></Header>
            <ScheduleComponent
                height="600px"
            >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}></Inject>
            </ScheduleComponent>
        </div>
    )
}

export default Calendar