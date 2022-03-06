/*import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState,useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const Event=()=> {

    const events = [
        {
            title: "Round1",
            allDay: true,
            start: new Date(2021, 6, 0),
            end: new Date(2021, 6, 0),
        }
    ];
  
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);
    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    
    return (
        <div className="App">
            <h2>Publish an event and meet new Buddies</h2>
            <div>
                <input type="text" placeholder="Add your event" 
                style={{ width: "20%", marginRight: "10px" }} 
                value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" 
                style={{ marginRight: "10px" }} 
                selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" 
                selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Publish
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} 
            startAccessor="start" endAccessor="end" 
            style={{ height: 500, margin: "50px" }} />
        </div>
    );
}
export default Event;*/

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from 'components/organisms/NotesList';
import Search from 'components/organisms/Search';
import Header from 'components/organisms/Header';
const Event = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Miami Springs Golf Course : Rory , Jason , Adam',
			date: '15/01/2022',
		},
		{
			id: nanoid(),
			text: 'La Gorce Golf Course : Justin, Gauthier, Dustin',
			date: '28/02/2022',
		},
		{
			id: nanoid(),
			text: 'Miami Beach Golf Course : Josh , Tom , Collin',
			date: '29/02/2022',
		},
	]);
	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};
export default Event;