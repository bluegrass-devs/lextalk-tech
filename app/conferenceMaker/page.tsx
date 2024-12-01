'use client';
import React, { useState } from "react";
import Talk from "./components/Talk";

export interface ScheduleItem {
  time: string;
  title: string;
  presenter: string;
  info: string;
  resources: string;
}

const ScheduleBuilder: React.FC = () => {
  const [ticketLink, setTicketLink] = useState<string>("");
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  const addScheduleItem = () => {
    setSchedule([
      ...schedule,
      { time: "", title: "", presenter: "", info: "", resources: "" },
    ]);
  };

  const handleScheduleChange = (
    index: number,
    field: keyof ScheduleItem,
    value: string
  ) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const removeScheduleItem = (index: number) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };

  const handleDownload = () => {
    const jsonData = JSON.stringify({ ticketLink, schedule }, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "schedule.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 flex flex-col gap-4 max-w-screen-md">
      <h1 className="text-xl font-bold">Schedule Builder</h1>
      <div className="flex gap-4">
        <label>Ticket Link</label>
        <input
          type="text"
          value={ticketLink}
          onChange={(e) => setTicketLink(e.target.value)}
          placeholder="Enter ticket link"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2>Schedule</h2>
          {schedule.map((item, index) => (
            <div className="flex flex-col gap-2 py-4 ring-2 ring-text px-4 rounded-xl bg-accent" key={index}>
              <Talk inputType="time" label="time" handleScheduleChange={handleScheduleChange} index={index} item={item}/>
              <Talk inputType="text" label="title" handleScheduleChange={handleScheduleChange} index={index} item={item}/>
              <Talk inputType="text" label="presenter" handleScheduleChange={handleScheduleChange} index={index} item={item}/> 
              <Talk inputType="text" label="info" handleScheduleChange={handleScheduleChange} index={index} item={item}/>
              <Talk inputType="text" label="resources" handleScheduleChange={handleScheduleChange} index={index} item={item}/>
              <button className="py-2 px-4 rounded-xl text-background bg-text hover:text-text hover:bg-background hover:ring-2 ring-text w-fit" onClick={() => removeScheduleItem(index)}>Remove</button>
            </div>
          ))}
        <button className="py-2 px-4 rounded-xl text-background bg-text hover:text-text hover:bg-background hover:ring-2 ring-text" onClick={addScheduleItem}>Add Talk</button>
      </div>
      <button
        className="py-2 px-4 rounded-xl text-background bg-text hover:text-text hover:bg-background hover:ring-2 ring-text"
        onClick={handleDownload}
      >
        Download JSON
      </button>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Preview JSON:</h2>
        <pre>{JSON.stringify({ ticketLink, schedule }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ScheduleBuilder;