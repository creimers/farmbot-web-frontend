import { Everything } from "../../interfaces";
import * as moment from "moment";
import { Dictionary } from "farmbot";
import { FarmEventProps, CalendarOccurrence, CalendarDay } from "../interfaces";
import {
  selectAllFarmEvents,
  indexSequenceById,
  indexRegimenById
} from "../../resources/selectors";
import { joinFarmEventsToExecutable } from "./calendar/selectors";

const FORMAT = "MMDD";
const MONTHS: Readonly<Dictionary<string>> = {
  "12": "Dec",
  "11": "Nov",
  "10": "Oct",
  "09": "Sep",
  "08": "Aug",
  "07": "Jul",
  "06": "Jun",
  "05": "May",
  "04": "Apr",
  "03": "Mar",
  "02": "Feb",
  "01": "Jan"
};

/** Prepares a FarmEvent[] for use with <FBSelect /> */
export function mapStateToProps(state: Everything): FarmEventProps {
  // let farmEvents = selectAllFarmEvents(state.resources.index);
  let x = joinFarmEventsToExecutable(state.resources.index);

  let push = (state && state.router && state.router.push) || (() => { });

  let farmEventByMMDD: Dictionary<CalendarOccurrence[]> = x
    .reduce(function (memo, fe) {
      (fe.calendar || []).map(function (date) {
        let m = moment(date);
        let mmdd = m.format(FORMAT);
        let executableId = fe.executable_id;
        let occur = {
          sortKey: m.unix(),
          timeStr: m.format("hh:mm a"),
          executableName: fe.executable.name || fe.executable_type,
          executableId,
          id: fe.id || 0,
        };
        (memo[mmdd]) ? memo[mmdd].push(occur) : (memo[mmdd] = [occur]);
      });
      return memo;
    }, ({} as Dictionary<CalendarOccurrence[]>));

  let calendarRows: CalendarDay[] = _.chain(x)
    .map(y => y.calendar || [])  // Grab every calendar date
    .flatten()                   // Smoosh into single array.
    .uniq()                      // Remove dupes
    .compact()                   // Remove empty values (to be safe)
    .map(y => moment(y))         // Convert string to moment() objects.
    .uniq(x => x.format(FORMAT)) // Grab unique day and month combos.
    .map(function (m) {
      let mmdd = m.format(FORMAT);
      let items = farmEventByMMDD[mmdd];
      if (!items) {
        throw new Error("No");
      }
      return {
        sortKey: m.unix(),
        month: MONTHS[mmdd.slice(0, 2)] || "???",
        day: parseInt(mmdd.slice(2, 4)),
        items
      };
    })
    .sortBy("sortKey")
    .value();
  return { calendarRows, push };
}
