// import { Dictionary } from "farmbot/dist";
// import {
//   NewCalendarItem,
//   FarmEventWithExecutable,
//   FarmEventWithRegimen,
//   FarmEventWithSequence
// } from "./interfaces";
// import * as moment from "moment";

// /** A look up object for calendar items (farm events). */
// export class Calendar {
//   static KEY_FORMAT = "MMDD";
//   constructor(public value: Dictionary<NewCalendarItem[]> = {}) { }

//   add = (item: FarmEventWithExecutable) => {
//     switch (item.executable_type) {
//       case "Sequence":
//         this.addSequence(item);
//         break;
//       case "Regimen":
//         this.addRegimen(item);
//         break;
//       default:
//         throw new Error("Bad executable");
//     }
//     return this;
//   }

//   addRegimen = (item: FarmEventWithRegimen) => {
//     // Add the start
//     let time = moment(item.start_time);
//     this.insert(item.start_time, {
//       dayOfMonth: time.day(),
//       month: time.format("MMM"),
//       executable_id: item.executable_id,
//       executable_type: item.executable_type,
//       farm_event_id: item.id || -1,
//       label: item.executable.name,
//       sortKey: time.unix(),
//       timeStr: time.format("hh mm dd yy")
//     });
//     // Add *all* the regimen items.
//     throw new Error("TODO");
//   }

//   addSequence = (item: FarmEventWithSequence) => {
//   }

//   insert = (date: string, item: NewCalendarItem) => {
//     let k = this.keyFor(date);
//     this.value[k] = this.value[k] || [];
//     this.value[k].push(item);
//   }

//   keyFor = (jsonDate: string) => moment(jsonDate).format(Calendar.KEY_FORMAT);
// }
