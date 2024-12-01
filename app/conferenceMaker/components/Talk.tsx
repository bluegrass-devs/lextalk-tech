import React from "react";
import { ScheduleItem } from "../page";

interface TalkProps {
    inputType: string;
    label: keyof ScheduleItem;
    handleScheduleChange: (
      index: number,
      field: keyof ScheduleItem,
      value: string
    ) => void;
    index: number;
    item: ScheduleItem;
  }
  

export default function Talk({ inputType, label, handleScheduleChange, index, item}: TalkProps): React.JSX.Element {
    return (
        <div className="flex flex-col">
            <label htmlFor="time">{label}</label>
            <input
            type={inputType}
            value={item[label]}
            name={label}
            id={label}
            onChange={(e) =>
                handleScheduleChange(index, label, e.target.value)
            }
            />
        </div> 
    )
}