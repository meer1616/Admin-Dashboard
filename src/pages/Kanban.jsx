import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban"
import { kanbanData, kanbanGrid } from "../data/dummy"
import { Header } from '../components'

const Kanban = () => {

    const handleChange = (event) => {
        console.log("werty", event.target);

    }

    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl'>
            <Header category="App" title="Kanban"></Header>
            <KanbanComponent

                id="kanban"
                dataSource={kanbanData}
                cardSettings={{ contentField: 'Summary', headerField: 'Id', }}
                keyField="Status"
            >
                <ColumnsDirective >
                    {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                {/* <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}></Inject> */}
            </KanbanComponent>
        </div>
    )
}

export default Kanban