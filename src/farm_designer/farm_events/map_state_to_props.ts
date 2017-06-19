import { Everything } from "../../interfaces";
import * as moment from "moment";
import { FarmEventProps, CalendarOccurrence, CalendarDay } from "../interfaces";
import { joinFarmEventsToExecutable } from "./calendar/selectors";
import { Calendar } from "./calendar/index";
import { FarmEventWithSequence, FarmEventWithExecutable } from "./calendar/interfaces";

/** Make a calendar occurence for a time and farm event. */
function occurrence(m: moment.Moment, fe: FarmEventWithExecutable) {
  return {
    sortKey: m.unix(),
    timeStr: m.format("hh:mm a"),
    executableName: fe.executable.name || fe.executable_type,
    executableId: fe.executable_id || 0,
    id: fe.id || 0,
  };
}

/** Prepares a FarmEvent[] for use with <FBSelect /> */
export function mapStateToProps(state: Everything): FarmEventProps {
  // let farmEvents = selectAllFarmEvents(state.resources.index);
  let x = joinFarmEventsToExecutable(state.resources.index);

  let push = (state && state.router && state.router.push) || (() => { });
  let calendar = new Calendar();
  // let farmEventByMMDD: Dictionary<CalendarOccurrence[]> =
  x.map(function (fe) {
    if (fe.executable_type === "Regimen") {
      fe.executable.regimen_items.map(ri => {
        // Add the offset, give it a special name, push it into the calendar.
        debugger;
        console.log()
        throw new Error("STOPPED HERE");
      })
    }
    (fe.calendar || []).map(function (date) {
      let m = moment(date);
      calendar.insert(m, occurrence(m, fe))
    });
  });

  let calendarRows: CalendarDay[] = _.chain(x)
    .map(y => y.calendar || [])  // Grab every calendar date
    .flatten()                   // Smoosh into single array.
    .uniq()                      // Remove dupes
    .compact()                   // Remove empty values (to be safe)
    .map(y => moment(y))         // Convert string to moment() objects.
    .uniq(x => x.format(Calendar.DATE_FORMAT)) // Grab unique day and month combos.
    .map(function (m) {
      let mmdd = m.format(Calendar.DATE_FORMAT);
      let items = calendar.findByDate(m);
      return {
        sortKey: m.unix(),
        month: Calendar.MONTHS[mmdd.slice(0, 2)] || "???",
        day: parseInt(mmdd.slice(2, 4)),
        items
      };
    })
    .sortBy("sortKey")
    .value();
  return { calendarRows, push };
}
