import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { useNavigate} from "react-router-dom";
import ReactDOM from 'react-dom';
import './Layout.scss'
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const MenubarDemo = () => {
	const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            command: () => {
                navigate('/');
            },
        },
        {
            label: 'Connect',
            items: [
                {
                    label: 'Startups',
                    command: () => {
                        navigate('/startups');
                    },
                },
                {
                    label: 'Investors',
                },
                {
                    label: 'Accelerators',
                },
                {
                    label: 'Incubators',
                },

            ]
        },
        {
            label: 'Resources',
        },
        {
            label: 'Mentorships',

        },
        {
            label: 'Analysis',
        }
    ];

    const start = <h2 style={{marginLeft:'10rem',marginRight:'10rem'}} ><font face="Times" font size="+20" color="#1B4F72 ">
    <b>StartDev</b>
    </font></h2>;
    const end = <div style={{ 'display': 'flex' ,'':'center', marginRight:'10rem'}}> <InputText placeholder="Search" type="text" /> <i className="pi pi-user" style={{ 'fontSize': '2em' ,'marginLeft':'1rem' }}></i>
    </div>;


    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}

export default MenubarDemo;