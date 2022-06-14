import React from "react";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Resize,
    Sort,
    ContextMenu,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Search,
    Inject,
    Toolbar
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employee = () => {
    return (
        <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
            <Header title="Employee" category="Page" />
            <GridComponent id="gridcomp" dataSource={employeesData} allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[
                        Resize,
                        Sort,
                        ContextMenu,
                        Filter,
                        Page,
                        Search,
                        ExcelExport,
                        PdfExport,
                        Edit,
                        Toolbar
                    ]}
                ></Inject>
            </GridComponent>
        </div>
    );
};

export default Employee;
