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
    Toolbar,
    Selection
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customer = () => {
    return (
        <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
            <Header title="Customers" category="Page" />
            <GridComponent id="gridcomp" dataSource={customersData} allowPaging
                allowSorting
                toolbar={['Search', 'Delete', 'Add']}
                editSettings={{ allowAdding: true, allowEditing: true, allowDeleting: true }}
                width="auto"
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
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
                        Toolbar,
                        Selection
                    ]}
                ></Inject>
            </GridComponent>
        </div>
    )
}

export default Customer