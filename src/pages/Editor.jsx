import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {

    // const handleChange = () => {
    //     console.log("werty");
    // }
    return (
        <div className='p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl'>
            <Header category="App" title="RichTextEditor"></Header>
            <RichTextEditorComponent
            // onChange={handleChange}
            // dataSource={kanbanData}
            >
                <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar,]} />
            </RichTextEditorComponent>
        </div>
    )
}

export default Editor