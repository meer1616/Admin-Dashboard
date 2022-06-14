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
    Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import { Header } from "../components";

const Order = () => {
    return (
        <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
            <Header title="Orders" category="Page" />
            <GridComponent id="gridcomp" dataSource={ordersData} allowPaging
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
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
                        ExcelExport,
                        PdfExport,
                        Edit,
                    ]}
                ></Inject>
            </GridComponent>
        </div>
    );
};

export default Order;
